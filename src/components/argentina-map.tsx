"use client";

import { useRef, useEffect } from "react";
import * as d3 from "d3";
import { geoVoronoi } from "d3-geo-voronoi";
import provincesData from "../../public/argentina-provinces.json";
import airportsData from "../../public/argentina-airports.json";
import { allCards } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { useLocale } from "@/context/language-context";

export default function Home() {
  const svgRef = useRef();
  const tooltipRef = useRef();
  const width = 600;
  const height = 800;

  const locale = useLocale();
  const article = allCards.find(
    (card: any) => card.identifier === "airports" && card.locale === locale
    );
  if (!article) {
    notFound();
  }

  useEffect(() => {
    const svgElement = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);

    const projection = d3
      .geoMercator()
      .fitExtent(
        [
          [0, 0],
          [width, height],
        ],
        provincesData,
      )
      .center([-60, -40])
      .scale(1000);

    tooltip
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

      const path = d3.geoPath(projection);

    const mouseenter = function (d) {
      console.log(d.target.__data__.properties.site.properties.fna);
      tooltip.classed("hidden", false);
      tooltip.select("span").html(d.target.__data__.properties.site.properties.fna);
    };
    const mousemove = function(d) {
      const x = d.clientX 
      const y = d.clientY - 140
      tooltip.classed("hidden", false)
      tooltip.style("left", x + "px")
      tooltip.style("top", y + "px")
    }
    const mouseleave = function (d) {
      tooltip.classed("hidden", true);
    };

    svgElement
      .append("path")
      .datum(airportsData)
      .attr("d", d3.geoPath(projection).pointRadius(2.5))
      .classed("dark:fill-neutral-200 fill-gray-800", true);

    svgElement
      .selectAll("path")
      .data(provincesData.features)
      .enter()
      .append("path")
      .classed(
        "provincia dark:stroke-neutral-200 stroke-gray-800 fill-none stroke-1",
        true,
      )
      .attr("d", path);

    svgElement
      .append("g")
      .classed(
        "dark:stroke-gray-600 stroke-neutral-200 fill-none stroke-1",
        true,
      )
      .attr("pointer-events", "all")
      .selectAll("path")
      .data(geoVoronoi().polygons(airportsData.features).features)
      .join("path")
      .attr("d", d3.geoPath(projection))
      .classed("fill-none hover:fill-blue-200 hover:opacity-50", true)
      .on("mouseenter", mouseenter)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
  }, []);

  return (
    <>
      <svg viewBox={`0 0 ${width} ${height}`} ref={svgRef}></svg>
      <div ref={tooltipRef} className="hidden absolute p-4 dark:bg-gray-600/90 bg-neutral-400/90 w-60 h-32 rounded-lg overflow-hidden">
        <span className="text-clip text-sm opacity-100"></span>
      </div>
      <br />
      <Mdx code={article.body.code} />
    </>
  );
}
