import { createClient } from "@/prismicio";
import MessageForm from "@/components/MessageForm";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import PageTransition from "@/components/PageTransition";

export default async function Contact () {
  const client = createClient();
  const contact = await client.getSingle("contact");
  
  return (
    <div className="mt-10 xl:mb-20">
      <PageTransition>
        <div className="text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicRichText field={contact.data.heading} className="text-balance text-center text-5xl font-medium md:text-7xl" />
        </div>
      </PageTransition>
    <div className="xl:mx-[430px] lg:mx-[430px] glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-accent/15 blur-3xl filter" />
    <div className="relative mx-40 text-balance text-center text-5xl font-medium md:text-7xl">
    
    </div>
    <MessageForm 
      welcomeMessage = {contact.data.welcome_message}
    />
    </div>
  );
};
