export function MainCard({ children }: { children: React.ReactNode }) {
  return (
      <div className="mx-auto max-w-4xl space-y-8 px-2 md:py-8 md:px-8">
        <div className="rounded-lg dark:bg-gray-700 bg-neutral-300 p-px shadow-lg dark:shadow-gray-50/20 shadow-neutral-400">
          <div className="rounded-lg p-3.5 md:p-6">{children}</div>
        </div>
    </div>
  );
}
