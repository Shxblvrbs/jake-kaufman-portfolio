"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { 
    PiCamera,
    PiVideoCamera,
    PiFiles,
    PiBasketball,
    PiYoutubeLogo,
    PiMicrophoneStage,
    PiHeadphones,
    PiNotePencil,
} from "react-icons/pi";
import Bounded from "./Bounded";

const icons = {
    camera: <PiCamera />,
    video: <PiVideoCamera />,
    files: <PiFiles />,
    basketball: <PiBasketball />,
    youtube: <PiYoutubeLogo />,
    microphone: <PiMicrophoneStage />,
    headphones: <PiHeadphones />,
    notes: <PiNotePencil />,
}

async function Resume( { sectionTitle1, sectionTitle2, sectionTitle3, sectionTitle4, sectionDescription1, sectionDescription2, sectionDescription3, sectionDescription4, experienceBlock, educationBlock, skillsBlock, aboutMeBlock }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-9 xl:py-3"
    >
      <Bounded>
      <div className="xl:mt-6 container mx-auto items-center rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{sectionTitle1}</TabsTrigger>
            <TabsTrigger value="education">{sectionTitle2}</TabsTrigger>
            <TabsTrigger value="skills">{sectionTitle3}</TabsTrigger>
            <TabsTrigger value="about">{sectionTitle4}</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{sectionTitle1}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {sectionDescription1}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-rows-1 lg:grid-rows-2 gap-[30px]">
                    {experienceBlock.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.experience_time_period}</span>
                          <h3 className="text-2xl max-w-[260px] text-center md:text-left">
                            {item.experience_position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.experience_institution}</p>
                          </div>
                          <p className="text-sm xl:text-lg font-thin prose text-white w-auto">{item.experience_description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{sectionTitle2}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {sectionDescription2}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-rows-1 lg:grid-rows-2 gap-[30px]">
                    {educationBlock.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.education_time_period}</span>
                          <h3 className="text-2xl max-w-[260px] text-center lg:text-left">
                            {item.education_title}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.education_institution}</p>
                          </div>
                          <p className="text-sm xl:text-lg font-thin prose text-white w-auto">{item.education_description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{sectionTitle3}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {sectionDescription3}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skillsBlock.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                <>{item.icon && icons[item.icon]}</>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.skill}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
              >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{sectionTitle4}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {sectionDescription4}
                </p>
                <ul className="grid grid-rows-1 xl:grid-rows-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {aboutMeBlock.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                        >
                        <span className="text-white/60">{item.field}</span>
                        <span className="text-xl">{item.field_content}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      </Bounded>
    </motion.div>
  );
};

export default Resume;
