

import React from "react";

import { createClient } from "@/prismicio";
import ResumeContent from "@/components/ResumeContent";
import { PrismicRichText } from "@prismicio/react";
import PageTransition from "@/components/PageTransition";

export default async function Resume () {
  const client = createClient();
  const resume = await client.getSingle("resume");
  
  return (
    <div className="mb-20">
    <div className="relative mx-40 mt-10">
      <div className="xl:ml-[272px] glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-accent/15 blur-3xl filter" />
      <PageTransition>
      <PrismicRichText field={resume.data.heading} className="text-balance text-center text-5xl font-medium md:text-7xl"
        components = {{
          heading2: ({children})=>(
            <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
            {children}
          </h2>
        )
        }}
      />
      </PageTransition>

      <ResumeContent
        sectionTitle1={resume.data.section_title_1}
        sectionTitle2={resume.data.section_title_2}
        sectionTitle3={resume.data.section_title_3}
        sectionTitle4={resume.data.section_title_4}
        sectionDescription1={resume.data.section_description_1}
        sectionDescription2={resume.data.section_description_2}
        sectionDescription3={resume.data.section_description_3}
        sectionDescription4={resume.data.section_description_4}
        experienceBlock={resume.data.experience_block}
        educationBlock={resume.data.education_block}
        skillsBlock={resume.data.skills_block}
        aboutMeBlock={resume.data.about_me_block}
      />
      </div>
      </div>
  );
};
