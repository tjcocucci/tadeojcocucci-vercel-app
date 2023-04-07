import Image from "next/image";
import profilePic from "../../public/profile.jpg";

export function Profile() {
  return (
    <Image src={profilePic} width="200" height="200" alt="Profile picture" />
  );
}
