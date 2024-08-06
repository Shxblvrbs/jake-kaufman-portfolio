// import Link from "next/link";
// import { Button } from "./ui/button";

// // components
// import MobileNav from "./MobileNav";
// import Nav from "./Nav";
// import React from "react";

// const Header = () => {
//   return (
//     <header className="py-8 xl:py-12 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* logo */}
//         <Link href="/">
//           <h1 className="text-4xl font-semibold">
//             Jake
//             <span className="text-accent"> Kaufman</span>
//           </h1>
//         </Link>

//         {/* desktop nav & hire me button */}
//         <div className="hidden xl:flex items-center gap-8">
//           <Nav />
//           <Link href="/contact">
//             <Button>Hire me</Button>
//           </Link>
//         </div>

//         {/* mobile nav */}
//         <div className="xl:hidden">
//           <MobileNav />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { PrismicNextLink } from "@prismicio/next";
import { KeyTextField, LinkField } from "@prismicio/client";
import * as SheetPrimitive from "@radix-ui/react-dialog";

export default async function Header(){
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="py-8 xl:py-12 text-white">

      <div className="container mx-auto flex justify-between items-center md:sticky">
        {/* logo */}
        <Link href="/" aria-label="Home Page">
          <h1 className="text-4xl font-semibold">
            {settings.data.first_name}
            <span className="text-accent"> {settings.data.last_name}</span>
          </h1>
        </Link>
        
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          {settings.data.nav_item.map(({ link, label }, index) => (
            <ul>
              <li key={index} className={`${"hover:text-accent hover:border-b-2 hover:border-accent transition-colors"} capitalize font-medium hover:text-accent transition-all`}>
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
              </li>
            </ul>
        ))}

          <PrismicNextLink field={settings.data.cta_link}>
            <Button><span>{settings.data.cta_label}</span></Button>
          </PrismicNextLink>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger className="flex justify-center items-center">
              <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
        
            {/* logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
              <Link href="/">
              <SheetPrimitive.Close>
              <h1 className="text-4xl font-semibold">
                {settings.data.first_name}
                <span className="text-accent"> {settings.data.last_name}</span>
              </h1>
              </SheetPrimitive.Close>
              </Link>
            </div>
        
            {/* nav */}
            <div className="flex flex-col justify-center items-center gap-8">
              {settings.data.nav_item.map(({ link, label}, index) => (
                <ul> 
                  <li key={index} className={`${"hover:text-accent hover:border-b-2 hover:border-accent transition-transform"} capitalize font-medium hover:text-accent transition-all`}>
                    <PrismicNextLink field={link}><SheetPrimitive.Close>{label}</SheetPrimitive.Close></PrismicNextLink>
                  </li>
                  
                </ul>
              ))}
                  
              <PrismicNextLink field={settings.data.cta_link}>
                <Button><span><SheetPrimitive.Close>{settings.data.cta_label}</SheetPrimitive.Close></span></Button>
              </PrismicNextLink>
                
            </div>
                
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
       );
}
