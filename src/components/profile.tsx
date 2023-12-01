"use client";
import Image from "next/image";
import profilePic from "../../public/profile.jpg";
import { Card } from "./card";
import MailIcon from "public/mail";
import GitHubIcon from "public/github";
import LinkedInIcon from "public/linkedin";
import { LocalizedText as t } from "@/context/language-context";

export function Profile({ width }: { width?: number }) {
  return (
    <Image
      alt="Profile picture"
      className="rounded-full"
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
        <div className="flex items-center w-150 space-x-4">
          <div className="w-1/3">
            <Profile />
          </div>
          <div className="flex flex-col w-2/3 self-start">
            <p className="w-full callout text-lg mb-0 font-medium text-gray-800 dark:text-gray-200">
              Tadeo Javier Cocucci
            </p>
            <p className="w-full callout mt-2 mb-0 text-sm dark:text-gray-400 text-gray-600 line-clamp-3">
              {t("computerSciencesphd")}
            </p>
            <p className="w-full callout mt-2 mb-0 text-sm dark:text-gray-400 text-gray-600 line-clamp-3">
              {t("softwareDeveloper")}
            </p>
            <p className="w-full callout mt-2 mb-0 text-sm dark:text-gray-400 text-gray-600 line-clamp-3">
              {t("teacher")}
            </p>
          </div>
        </div>
        <div className="block">
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
