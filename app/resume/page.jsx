import React from "react";

import { createClient } from "@/prismicio";
import ResumeContent from "@/components/ResumeContent";
import { PrismicRichText } from "@prismicio/react";
import PageTransition from "@/components/PageTransition";

export default async function Resume () {
  const client = createClient();
  const resume = await client.getSingle("resume");
  
  return (
    <div className="mt-10 xl:mb-20">
      <PageTransition>
        <div className="text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicRichText field={resume.data.heading} className="text-balance text-center text-5xl font-medium md:text-7xl" />
        </div>
      </PageTransition>
    <div className="xl:mx-[430px] lg:mx-[430px] glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-accent/15 blur-3xl filter" />
    <div className="relative xl:mx-40">

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
