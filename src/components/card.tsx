export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-neutral-100 dark:bg-gray-800 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 my-8">
      {children}
    </div>
  );
}
