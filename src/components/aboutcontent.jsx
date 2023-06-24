import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";

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
        <div className="bg-gray-900">
            <div
                id="about-content"
                className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-12 lg:px-6"
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
                        className="text-justify"
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
                <div className="grid grid-cols-2 gap-4 lg:mt-8">
                    <motion.img
                        initial="hidden"
                        animate={controls}
                        variants={imageVariants}
                        className="w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="office content 1"
                    />
                    <motion.img
                        initial="hidden"
                        animate={controls}
                        variants={imageVariants}
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        alt="office content 2"
                    />
                </div>
            </div>
        </div>
    );
}
