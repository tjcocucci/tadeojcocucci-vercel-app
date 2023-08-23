import Image from "next/image";
import profilePic from "../../public/profile.jpg";
import { Card } from "./card";

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
      </div>
      <div className="w-full callout">Tadeo Javier Cocucci</div>
    </Card>
  );
}
