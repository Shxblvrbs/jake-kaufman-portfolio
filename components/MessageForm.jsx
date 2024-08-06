"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdArrowOutward } from "react-icons/md";    
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Bounded from "./Bounded";
import Heading from "./Heading";

const MessageForm = ({welcomeMessage}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_9cyhqc1";
        const templateId = "template_mdb5bx1";
        const publicKey = "WI2X7EFa69jXjfb7s"; 

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Shahab",
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Message Sent Successfully!', response);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error Sending Message...', error);
        });
    }

    const pathname = usePathname();

    return(
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
        className="text-center"
        >
            <div className="text-md xl:text-lg font-thin text-white w-auto">
                <Heading as="h3" size="sm">
                {welcomeMessage}
                </Heading>
            </div>
        </Bounded>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <input
                required
                type="text"
                id="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}

                className = "xl:text-4xl lg:text-4xl text-xl xl:h-16 lg:h-16 xl:w-8/12 lg:w-8/12 bg-transparent border-2 rounded-lg border-white border-opacity-50 outline none focus:border-accent transition duration-200 mx-14 px-5 my-5 py-5"
            />
            <input
                required
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                className = "xl:text-4xl lg:text-4xl text-xl xl:h-16 lg:h-16 xl:w-8/12 lg:w-8/12 bg-transparent border-2 rounded-lg border-white border-opacity-50 outline none focus:border-accent transition duration-200 mx-14 px-5 my-5 py-5"
            />
            <textarea
                cols="30"
                rows="10"
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}

                className = "xl:text-4xl lg:text-4xl text-xl bg-transparent border-2 rounded-lg border-white border-opacity-50 outline none focus:border-accent transition duration-200 mx-14 px-5 my-5 py-5"
            ></textarea>

            <Button
                variant="outline"
                size="lg"
                className="xl:text-xl lg:text-xl mt-5 flex items-center gap-2" type="submit">
                Send Message <MdArrowOutward className="inline-block" />
            </Button>
            {/* <span className="relative inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span> */}
            {/* <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span> */}
        </form>
        </motion.div>
        </div>
        </AnimatePresence>
    )


}

export default MessageForm