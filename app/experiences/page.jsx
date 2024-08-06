import { createClient } from "@/prismicio";
import ExperiencesContent from "@/components/ExperiencesContent";
import { PrismicRichText } from "@prismicio/react";
import PageTransition from "@/components/PageTransition";

export default async function Experiences () {
  const client = createClient();
  const experiences = await client.getSingle("experiences");
  
  return (
    <div className="mt-10">
      <PageTransition>
        <div className="text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicRichText field={experiences.data.heading} className="text-balance text-center text-5xl font-medium md:text-7xl" />
        </div>
      </PageTransition>
    <div className="xl:mx-[430px] lg:mx-[430px] glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-accent/15 blur-3xl filter" />
    <div className="relative mx-40 mt-10 text-balance text-center text-5xl font-medium md:text-7xl">
  
    </div>
    <ExperiencesContent 
    experienceItem={experiences.data.experience_item}
    />
    </div>
  );
};
