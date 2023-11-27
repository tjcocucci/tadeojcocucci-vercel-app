export function MainCard({ children }: { children: React.ReactNode }) {
  return (
      <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
        <div className="rounded-lg bg-gradient-to-br from-gray-500 via-gray-600 to-gray-900 to-[300px] p-px shadow-lg shadow-gray-50/20">
          <div className="rounded-lg p-3.5 lg:p-6">{children}</div>
        </div>
    </div>
  );
}
