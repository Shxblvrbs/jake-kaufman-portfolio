import { createClient } from "@/prismicio";
import ExperiencesContent from "@/components/ExperiencesContent";
import { PrismicRichText } from "@prismicio/react";
import PageTransition from "@/components/PageTransition";

export default async function Experiences () {
  const client = createClient();
  const experiences = await client.getSingle("experiences");
  
  return (
    <div className="relative">
    <div className="mx-40 mt-10 text-balance text-center text-5xl font-medium md:text-7xl">
    <div className="xl:ml-[272px] glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-accent/15 blur-3xl filter" />
    <PageTransition>
    <PrismicRichText field={experiences.data.heading}
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
    <ExperiencesContent 
    experienceItem={experiences.data.experience_item}
    />
    </div>
  );
};
