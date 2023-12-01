import { ProfileCard } from "@/components/profile";

export default function HomePage() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-2xl font-medium dark:text-gray-200 text-gray-800">Acerca de mí</h1>
      <ProfileCard />
    </div>
  );
}
