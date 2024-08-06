import React from "react";

import { createClient } from "@/prismicio";
import Heading from "@/components/Heading";
import PageTransition from "@/components/PageTransition";
import Bounded from "@/components/Bounded";
import BlogBlock from "@/components/BlogBlock";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export default async function Blog () {
  const client = createClient();
  const blog = await client.getSingle("blog");
  
  return (
    <div className="mb-5">
    <div className="relative mx-40 mt-10 text-balance text-center text-5xl font-medium md:text-7xl">
    <div className="xl:ml-[272px] glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-accent/15 blur-3xl filter" />
    <PageTransition><Heading as="h1">{blog.data.title}</Heading></PageTransition>

    </div>

    <Bounded as="article">
    <div className="rounded-2xl border-2 border-slate-800 bg-[#232329] px-2 py-5 md:px-4 md:py-10">
    <div className="prose prose-lg prose-invert w-full max-w-none">
    {blog.data.blog_block.map((item, index) => {
      return (
        <div className="mx-14 xl:mx-28">
            <PrismicNextImage field={item.image} className="xl:w-[1000px] mb-16"/>
            <PrismicRichText
            field={item.text}
            />
            </div>
        );
      })}
      <p className="mt-24 border-t border-accent flex gap-4 text-accent text-xl font-bold">
        {blog.tags.map((tag) => (
            <span className="mt-8" key={tag}>{tag}</span>
        ))}
      </p>
      <div className="mt-8 text-xl font-medium">
        {blog.data.date}
      </div>

    </div>
    </div>
    </Bounded>

    </div>
  );
};
