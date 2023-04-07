import Image from "next/image";
import profilePic from '../../public/profile.jpg'

export function Logo() {
  return (
    <div>
      <Image src={profilePic} width="50" height="50" alt="Profile picture" />
    </div>
  );
}
