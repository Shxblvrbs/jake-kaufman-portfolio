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
    <div className="mb-20">
    <div className="relative mx-40 mt-10 text-balance text-center text-5xl font-medium md:text-7xl">
    <div className="xl:ml-[272px] glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-accent/15 blur-3xl filter" />
    <PageTransition>
    <PrismicRichText field={contact.data.heading}
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
    <MessageForm 
      welcomeMessage = {contact.data.welcome_message}
    />
    </div>
  );
};
