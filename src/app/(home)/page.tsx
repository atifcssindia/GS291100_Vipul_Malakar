
import { Stores } from "@/components/Tables/stores";
import { StoresSkeleton } from "@/components/Tables/stores/skeleton";
import { Suspense } from "react";
import { PaymentsOverview } from "@/components/Charts/payments-overview";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";




type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
   
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          {/* <PaymentsOverview
          className="col-span-12 xl:col-span-12"
          key={extractTimeFrame("payments_overview")}
          timeFrame={extractTimeFrame("payments_overview")?.split(":")[1]}
        /> */}
        <div className="col-span-12 grid ">
          <Suspense fallback={<StoresSkeleton />}>
            <Stores />
          </Suspense>
        </div>
      </div>
   
  );
}
