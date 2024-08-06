import { createClient } from "@/prismicio";
import SamplesContent from "@/components/SamplesContent";
import { PrismicRichText } from "@prismicio/react";
import PageTransition from "@/components/PageTransition";

export default async function Samples () {
    const client = createClient();
    const samples = await client.getSingle("samples");
    return (
        <div className="mb-8">
        <div className="relative mx-40 mt-10 text-balance text-center text-5xl font-medium md:text-7xl">
        <div className="xl:ml-[272px] glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-accent/15 blur-3xl filter" />
        <PageTransition>
        <PrismicRichText field={samples.data.heading}
          components = {{
            heading2: ({children})=>(
              <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
              {children}
              </h2>
            )
          }}
        />
        </PageTransition>
        </div>
        <SamplesContent 
        sampleItem={samples.data.sample_item}
        />
        </div>
    );
}