import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import Image from 'next/image'

export default function AboutContent() {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("about-content");
            if (element && element.getBoundingClientRect().top < window.innerHeight) {
                controls.start("visible");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    const titleVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
        hidden: {
            opacity: 0,
            y: -20,
        },
    };

    const paragraphVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.1,
            },
        },
        hidden: {
            opacity: 0,
            y: -20,
        },
    };

    const imageVariants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
            },
        },
        hidden: {
            opacity: 0,
            x: 50,
        },
    };

    return (
        <div className="bg-gray-900 mb-12">
            <div
                id="about-content"
                className="content-center gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-12 lg:px-6"
            >
                <div className="font-light text-white sm:text-lg py-12">
                    <motion.h2
                        initial="hidden"
                        animate={controls}
                        variants={titleVariants}
                        className="mb-4 text-5xl font-extrabold"
                    >
                        IT Community
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        animate={controls}
                        variants={paragraphVariants}
                        align="justify"
                        className="mt-12 text-justify text-gray-300 font-normal"
                    >
                        Exdecode is
                        <span className="font-bold"> a community focused on software development and information technology. </span>
                        We provide a place for developers, coders, designers and technology enthusiasts to share knowledges,
                        experiences and new ideas in the world of information technology.
                        <br />
                        <br />
                        Members can <span className="font-bold">exchange information</span> and discuss topics such as programming,
                        application development, cybersecurity, and so on. The main goal of this community is to
                        <span className="font-bold"> improve the technical capabilities and expand the professional network</span> of
                        its members.
                    </motion.p>
                </div>
                <div className="lg:mt-0 -mt-12 flex justify-center items-center py-12">
                    <Image
                        // initial="hidden"
                        // animate={controls}
                        // variants={imageVariants}
                        width={350}
                        height={350}
                        className="rounded-lg"
                        src={"/logoexdecode.png"}
                        alt="Exdecode Logo"
                    />
                </div>
            </div>
        </div>
    );
}
