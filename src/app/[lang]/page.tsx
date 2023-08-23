import { ProfileCard } from "@/components/profile";

export default function HomePage() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Acerca de mí</h1>
      <ProfileCard />
    </div>
  );
}
