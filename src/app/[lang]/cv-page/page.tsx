"use client";

import { LocalizedText as t } from "@/context/language-context";

export default function Page() {
  const fullCvPdfUrlEn =
    "https://fzr8tswg8oaoonqf.public.blob.vercel-storage.com/cv/cv_tadeojcocucci_en-sxRyji8gV0ig99BYFdU6fLoxTpt31D.pdf";
  const fullCvPdfUrlEs =
    "https://fzr8tswg8oaoonqf.public.blob.vercel-storage.com/cv/cv_tadeojcocucci_es-y10souCLEo4tPe19VaLLf5CudcZrkJ.pdf";
  const singlePageCvPdfUrlEn =
    "https://fzr8tswg8oaoonqf.public.blob.vercel-storage.com/cv/cv_nominal_en-Ni2EBJtXDzohBIQM9S3Z84pz8pfSoh.pdf";
  const singlePageCvPdfUrlEs =
    "https://fzr8tswg8oaoonqf.public.blob.vercel-storage.com/cv/cv_nominal_es-hSpTfia0UEmPgIl2HezBT4H0FGpRmb.pdf";
  return (
    <div className="space-y-4">
      <h5 className="text-lg font-semibold">{t("singlePage")}</h5>
      <ul className="space-y-2">
        <li className="hover:underline">
          <a
            href={singlePageCvPdfUrlEn}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("english")}
          </a>
        </li>
        <li className="hover:underline">
          <a
            href={singlePageCvPdfUrlEs}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("spanish")}
          </a>
        </li>
      </ul>
      <br />
      <h5 className="text-lg font-semibold">{t("complete")}</h5>
      <ul className="space-y-2">
        <li className="hover:underline">
          <a href={fullCvPdfUrlEn} target="_blank" rel="noopener noreferrer">
            {t("english")}
          </a>
        </li>
        <li className="hover:underline">
          <a href={fullCvPdfUrlEs} target="_blank" rel="noopener noreferrer">
            {t("spanish")}
          </a>
        </li>
      </ul>
    </div>
  );
}
