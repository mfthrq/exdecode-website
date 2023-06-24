import { motion } from "framer-motion";

export default function AboutHeader() {
    return (
        <div class="lg:-mb-24">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                class="mt-32 mb-4 text-5xl font-extrabold text-gray-900 tracking-tight leading-none md:text-5xl lg:text-6xl">Exdecode</motion.h1>
                <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                class="mt-8 mb-8 text-lg font-medium text-gray-900 lg:text-2xl sm:px-16 lg:px-48">One of the IT enthusiast communities in Indonesia! </motion.p>
            </div>
        </div>
    )
}

