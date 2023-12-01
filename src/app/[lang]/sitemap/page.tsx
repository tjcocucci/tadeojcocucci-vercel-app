"use client";

import LocailzedLink from "@/components/localized-link";
import { contentItems } from "@/lib/content";
import { LocalizedText as t } from "@/context/language-context";

export default function About() {
  return (
    <div className="space-y-8">
      
      <h1 className="text-2xl font-medium dark:text-gray-200 text-gray-800">Mapa del sitio</h1>

      <div className="space-y-10 text-white">
        {contentItems.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider dark:text-gray-400 text-gray-700">
                {t(section.name)}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <LocailzedLink
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg dark:bg-gray-900 bg-neutral-200 hover:bg-neutral-400/20 px-5 py-3 dark:hover:bg-gray-800"
                    >
                      <div className="font-medium dark:text-gray-200 text-gray-800 dark:group-hover:text-gray-50 group-hover:text-gray-900">
                        {t(item.name)}
                      </div>

                      {item.description ? (
                        <div className="text-sm dark:text-gray-400 text-gray-600 line-clamp-3 dark:group-hover:text-gray-300 group-hover:text-gray-700">
                          {t(item.description)}
                        </div>
                      ) : null}
                    </LocailzedLink>
                  );
                })}
                {/* dark:bg-gray-800 bg-neutral-200 0 mb-4 text-gray-800 dark:text-gray-200 */}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
