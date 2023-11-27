"use client";
import Image from "next/image";
import profilePic from "../../public/profile.jpg";
import { Card } from "./card";
import MailIcon from "public/mail";
import GitHubIcon from "public/github";
import LinkedInIcon from "public/linkedin";
import { LocalizedText as t } from "@/context/languageContext";

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
      <div className="flex items-center w-150 mr-4">
        <Profile />
        <MailIcon />
      </div>
      <div className="block">
        <p className="w-full callout text-lg mb-0">Tadeo Javier Cocucci</p>
        <p className="w-full callout mb-8 mt-0">{t("computerSciencesphd")}</p>
        <p className="flex items-center space-x-2 mb">
          <MailIcon color="white" />
          <a href="mailto:tadeojcocucci@gmail.com">tadeojcocucci@gmail.com</a>
        </p>
        <p className="flex items-center space-x-2">
          <GitHubIcon color="white" />
          <a href="https://github.com/tjcocucci" target="_blank" rel="noopener noreferrer">github</a>
        </p>
        <p className="flex items-center space-x-2 align-baseline">
          <LinkedInIcon color="white" />
          <a href="https://linkedin.com/in/tjcocucci/" target="_blank" rel="noopener noreferrer">linkedin</a>
        </p>
      </div>
    </Card>
  );
}
