import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Cta() {
  return (
    <div className="grid grid-cols-2 items-center py-8 px-4 mx-auto sm:py-16 lg:px-8">
      <motion.iframe
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="col-span-2 md:col-span-1 lg:col-span-1 mx-auto mt-28 mb-12 md:my-20 lg:my-20 w-[310px] h-[500px]" src="https://discord.com/widget?id=1104032452781027349&theme=dark" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></motion.iframe>
      <div className="col-span-2 md:col-span-1 lg:col-span-1">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="mb-8 md:text-5xl xl:text-5xl text-4xl font-extrabold text-white dark:text-white"
        > Together We
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 90,
              strings: [
                "Innovate!",
                "Inspire!",
                "Improve!",
                "Are Excodian!"
              ],
            }}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="mb-6 mb-8 font-normal text-gray-300 md:text-lg dark:text-gray-400" align="justify">
          Invite visitors to start their adventure in the world of IT by joining the Exdecode community.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mb-8 inline-flex cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href="https://discord.gg/vuzKehbscE"
        >
          Join now
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
