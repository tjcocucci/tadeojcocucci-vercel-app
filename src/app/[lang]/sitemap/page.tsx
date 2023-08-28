"use client";

import LocailzedLink from "@/components/LocalizedLink";
import { contentItems } from "@/lib/content";
import { LocalizedText as t } from "@/context/languageContext";

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Mapa del sitio</h1>

      <div className="space-y-10 text-white">
        {contentItems.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {t(section.name)}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <LocailzedLink
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {t(item.name)}
                      </div>

                      {item.description ? (
                        <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                          {t(item.description)}
                        </div>
                      ) : null}
                    </LocailzedLink>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
