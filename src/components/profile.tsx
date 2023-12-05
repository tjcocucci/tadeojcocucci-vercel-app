"use client";
import Image from "next/image";
import profilePic from "../../public/profile.jpg";
import { Card } from "./card";
import MailIcon from "public/svg-icons/mail";
import GitHubIcon from "public/svg-icons/github";
import LinkedInIcon from "public/linkedin";
import { LocalizedText as t } from "@/context/language-context";
import SoftwareToolsCard from "./software-tools-card";

export function Profile({ width }: { width?: number }) {
  return (
    <Image
      alt="Profile picture"
      className="rounded-full m-0"
      src={profilePic}
      placeholder="blur"
      width={width || 200}
      priority
    />
  );
}

export function ProfileCard() {
  return (
    <Card>
      <div>
        <div className="flex flex-col sm:flex-row items-center w-150 border-b-2 border-neutral-300 dark:border-gray-700 border-dashed py-0">
          <div className="flex flex-col w-fit h-full py-4 sm:pr-4">
            <Profile />
            <div className="flex flex-col self-start">
              <p className="w-full callout text-lg mb-0 font-medium text-gray-800 dark:text-gray-200">
                Tadeo Javier Cocucci
              </p>
              <span className="w-full callout mt-2 mb-0 text-sm dark:text-gray-400 text-gray-600 line-clamp-3">
                {t("computerSciencesphd")}
              </span>
              <span className="w-full callout mt-2 mb-0 text-sm dark:text-gray-400 text-gray-600 line-clamp-3">
                {t("softwareDeveloper")}
              </span>
              <span className="w-full callout mt-2 mb-0 text-sm dark:text-gray-400 text-gray-600 line-clamp-3">
                {t("teacher")}
              </span>
            </div>
          </div>
          <div className="sm:w-1/2 w-full sm:pl-8 py-4 sm:border-l-2 sm:border-t-0 border-l-0 border-t-2 border-neutral-300 dark:border-gray-700 border-dashed ">
            <SoftwareToolsCard />
          </div>
        </div>
        <div className="flex flex-wrap gap-x-10 p-4">
          <h3 className="w-full callout text-lg mb-0 font-medium text-gray-800 dark:text-gray-200 pb-4">
            {t("contactInfo")}:{" "}
          </h3>
          <p className="flex items-center space-x-2 align-baseline my-1.5 text-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200">
            <MailIcon />
            <a
              className="text-gray-800 dark:text-gray-200"
              href="mailto:tadeojcocucci@gmail.com"
            >
              tadeojcocucci@gmail.com
            </a>
          </p>
          <p className="flex items-center space-x-2 align-baseline my-1.5 text-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200">
            <GitHubIcon />
            <a
              className="text-gray-800 dark:text-gray-200"
              href="https://github.com/tjcocucci"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </p>
          <p className="flex items-center space-x-2 align-baseline my-1.5 text-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200">
            <LinkedInIcon />
            <a
              className="text-gray-800 dark:text-gray-200"
              href="https://linkedin.com/in/tjcocucci/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </p>
        </div>
      </div>
    </Card>
  );
}
