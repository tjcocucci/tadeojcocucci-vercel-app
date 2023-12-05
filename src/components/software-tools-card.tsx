import dynamic from "next/dynamic";
import { softwareTools } from "@/content/software-tools";
import { LocalizedText as t } from "@/context/language-context";

const serverComponents = softwareTools.map((category) => {
  return Object.entries(category).map(([categoryName, toolsArray]) => {
    return {
      categoryName,
      tools: toolsArray.map((tool) => {
        return {
          ...tool,
          Icon: dynamic(() => import("../../public/svg-icons/" + tool.image)),
        };
      }),
    };
  });
});

export default function SoftwareToolsCard() {
  return (
    <div className="flex flex-wrap items-start">
      {serverComponents.map((category) => {
        return category.map(({ categoryName, tools }) => {
          return (
            <div key={categoryName} className="w-full">
              <p className="w-full callout text-lg mb-0 font-medium text-gray-800 dark:text-gray-200">
                {t(categoryName)}
              </p>
              <div className="flex flex-wrap items-center w-full">
                {tools.map(({ Icon, title, description, link }) => {
                  return (
                    <a
                      key={title}
                      className="flex items-center space-x-2 p-1 align-baseline my-1.5 text-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          );
        });
      })}
    </div>
  );
}
