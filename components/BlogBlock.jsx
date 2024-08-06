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

const BlogBlock = ({blogBlock, date, tags}) => {
  return (
    <Bounded as="article">
    <div className="rounded-2xl border-2 border-slate-800 bg-[#232329] px-4 py-10 md:px-8 md:py-20">
        <div className="flex gap-4 text-accent text-xl font-bold">
            {tags.map((tag) => (
                <span key={tag}>{tag}</span>
            ))}
        </div>
        <p>{date}</p>
    {blogBlock.map((item, index) => {
        return (
            <div key={index} className="prose prose-invert">
            <PrismicRichText
            field={item.text}
            />
            </div>
        );
    })}
    </div>
    </Bounded>

  );
};

export default BlogBlock;
