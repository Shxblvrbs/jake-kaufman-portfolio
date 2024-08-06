import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Photo from "@/components/Photo";
import { motion } from "framer-motion";
import DotPattern from "@/components/magicui/dot-pattern";

// components
// import Photo from "@/components/Photo";

export default async function Home() {
const client = createClient();
const homepage = await client.getSingle("homepage");

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="xl:ml-72 glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-accent/10 blur-3xl filter" />
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{homepage.data.title}</span>
            <h1 className="h1 mb-6">
              {homepage.data.greeting_top}<br /> <span className="text-accent">{homepage.data.greeting_bottom}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {homepage.data.mission_statement}
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <PrismicNextLink field={homepage.data.resume_link}>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              </PrismicNextLink>
              <div className="mb-8 xl:mb-0">
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo 
          picture={homepage.data.avatar}
          />
          </div>
        </div>
      </div>
    </section>
  );
};