import Banner from "@/components/homepage/Banner";
import Friends from "@/components/homepage/Friends";
import FeedSkeleton from "@/components/ui/FeedSkeleton";
import { Suspense } from "react";


export default function Home() {
  return (
  <div>
    <Banner/>
    <Suspense fallback={<FeedSkeleton />}>
    <Friends/>
    </Suspense>
  </div>
  );
}
