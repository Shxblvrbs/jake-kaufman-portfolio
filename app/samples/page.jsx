import { createClient } from "@/prismicio";
import SamplesContent from "@/components/SamplesContent";
import { PrismicRichText } from "@prismicio/react";
import PageTransition from "@/components/PageTransition";

export default async function Samples () {
    const client = createClient();
    const samples = await client.getSingle("samples");
    return (
        <div className="mt-10 xl:mb-8">
          <PageTransition>
          <div className="text-balance text-center text-5xl font-medium md:text-7xl">
            <PrismicRichText field={samples.data.heading} className="text-balance text-center text-5xl font-medium md:text-7xl" />
          </div>
          </PageTransition>
        <div className="xl:mx-[430px] lg:mx-[430px] glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-accent/15 blur-3xl filter" />
        <div className="relative xl:mx-40 text-balance text-center text-5xl font-medium md:text-7xl">

        </div>
        <SamplesContent 
        sampleItem={samples.data.sample_item}
        />
        </div>
    );
}