export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">

        {/* ── LEFT PANEL ── */}
        <div className="space-y-3">
          <div className="card-body items-center text-center gap-3 border border-base-300 rounded-lg py-5 shadow">
            <div className="skeleton w-20 h-20 rounded-full" />
            <div className="skeleton h-5 w-32 rounded-md" />
            <div className="flex flex-col items-center gap-2">
              <div className="skeleton h-5 w-20 rounded-full" />
              <div className="flex gap-1">
                <div className="skeleton h-5 w-16 rounded-full" />
                <div className="skeleton h-5 w-20 rounded-full" />
              </div>
            </div>
            <div className="space-y-1 w-full px-4">
              <div className="skeleton h-3 w-full rounded-md" />
              <div className="skeleton h-3 w-3/4 rounded-md mx-auto" />
            </div>
            <div className="skeleton h-3 w-40 rounded-md" />
          </div>

          <div className="space-y-3">
            <div className="skeleton h-14 w-full rounded-lg" />
            <div className="skeleton h-14 w-full rounded-lg" />
            <div className="skeleton h-14 w-full rounded-lg" />
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body gap-6">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-base-200 rounded-2xl p-4 flex flex-col items-center gap-2">
                  <div className="skeleton h-8 w-16 rounded-md" />
                  <div className="skeleton h-3 w-24 rounded-md" />
                </div>
              ))}
            </div>

            <div className="border-t border-base-200 pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="skeleton h-5 w-36 rounded-md" />
                <div className="skeleton h-8 w-14 rounded-md" />
              </div>
              <div className="skeleton h-3 w-48 rounded-md" />
            </div>

            <div className="border-t border-base-200 pt-4 space-y-3">
              <div className="skeleton h-5 w-32 rounded-md" />
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="skeleton h-20 w-full rounded-lg" />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}