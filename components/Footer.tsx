import clsx from "clsx";
import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { isFilled } from "@prismicio/client";
import { FaInstagram, FaTwitter, FaLinkedin, FaX } from "react-icons/fa6";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  

  return (
    <Bounded as="footer" className="">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-4 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
          >
            <span className={`${"hover:text-accent hover:border-b-2 hover:border-accent transition-colors"} capitalize font-medium hover:text-accent transition-all`}>{settings.data.first_name} {settings.data.last_name}</span>
          </Link>
          <span className="px-3">{" "}</span>
          <p className="text-sm text-white/60">
           © {new Date().getFullYear()} {settings.data.first_name} {settings.data.last_name}
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {settings.data.nav_item.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li key={index} className={`${"hover:text-accent hover:border-b-2 hover:border-accent transition-colors"} capitalize font-medium hover:text-accent transition-all`}>
                  <PrismicNextLink
                    field={link}
                  >
                    {label}
                  </PrismicNextLink>
                </li>
                {index < settings.data.nav_item.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] px-3"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div>
        <div className="hover:text-accent transition-transform socials inline-flex justify-center sm:justify-end px-2">
          {isFilled.link(settings.data.twitter_link) && (
            <PrismicNextLink
              field={settings.data.twitter_link}
              className="p-2 text-2xl transition-all duration-150 hover:scale-125"
              aria-label={settings.data.first_name + " on Twitter"}
            >
              <FaTwitter />
            </PrismicNextLink>
          )}
        </div>
        <span>{"  "}</span>
        <div className="hover:text-accent transition-transform socials inline-flex justify-center sm:justify-end px-3">
          {isFilled.link(settings.data.instagram_link) && (
            <PrismicNextLink
              field={settings.data.instagram_link}
              className="p-2 text-2xl transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.data.first_name + " on Instagram"}
            >
              <FaInstagram />
            </PrismicNextLink>
          )}
          </div>
          <span>{"  "}</span>
          <div className="hover:text-accent transition-transform socials inline-flex justify-center sm:justify-end px-2">
          {isFilled.link(settings.data.linkedin_link) && (
            <PrismicNextLink
              field={settings.data.linkedin_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.data.first_name + " on LinkedIn"}
            >
              <FaLinkedin />
            </PrismicNextLink>
          )}
          </div>
        </div>
      </div>
    </Bounded>
  );
}