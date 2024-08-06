"use client";

import React from "react";

import Bounded from "@/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

import { Button } from "./ui/button";
import PageTransition from "@/components/PageTransition";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Props for `Showcase`.
 */
// export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */

const ExperiencesContent = ({experienceItem}) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
        >
    <Bounded
    className="relative xl:mx-40 my-9"
    >

     {experienceItem.map((item, index) => {
       // Render the item
     return(
       <div key={index} className="grid mb-16 items-center rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">
          <div>
            <div className="mt-6 text-2xl font-normal">
            <PrismicRichText field={item.subheading} />
            </div>

            <div className="mt-4 text-md xl:text-lg font-thin text-white/60 w-auto">
            <PrismicRichText field={item.body} />
            </div>

            <PrismicNextLink field={item.button_link}>
            <Button className="my-6"><span>{item.button_text}</span></Button>
            </PrismicNextLink>
          </div>
          
        <PrismicNextImage
          field={item.image} 
          className={clsx(
            "opacity-90 rounded-xl shadow-2xl lg:col-span-2 lg:pt-0", 
          !(index/2 === 0) ?
          "lg:order-1 lg:translate-x-[15%]" :
          "lg:-order-1 lg:translate-x-[-15%]"
          )}
          />
     </div>
     );
    })}
    </Bounded>
    </motion.div>
    </div>
    </AnimatePresence>
  );
};

export default ExperiencesContent;
