const StatCardSkeleton = () => (
  <div className="stat bg-base-100 border border-base-200 rounded-2xl shadow-sm">
    <div className="skeleton h-9 w-12 rounded-lg mb-2" />
    <div className="skeleton h-3 w-28 rounded-md" />
  </div>
);

const FriendCardSkeleton = () => (
  <div className="card bg-base-100 border border-base-200 shadow-sm items-center text-center p-6 gap-3">
    <div className="skeleton w-16 h-16 rounded-full" />
    <div className="skeleton h-4 w-24 rounded-md" />
    <div className="skeleton h-3 w-12 rounded-md" />
    <div className="flex gap-2 justify-center">
      <div className="skeleton h-5 w-14 rounded-full" />
      <div className="skeleton h-5 w-16 rounded-full" />
    </div>
    <div className="skeleton h-5 w-20 rounded-full mt-1" />
  </div>
);

export default function FeedSkeleton() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-4">
        {Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)}
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="skeleton h-5 w-32 rounded-md" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-6 pb-6">
        {Array.from({ length: 8 }).map((_, i) => <FriendCardSkeleton key={i} />)}
      </div>
    </>
  );
}