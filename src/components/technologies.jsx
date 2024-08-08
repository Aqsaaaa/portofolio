import { motion } from "framer-motion"
import { Flutter, React, Firebase, Tailwindcss, Postman, Dart, Git, Postgresql, Figma, Nodejs, } from "../assets/icon.jsx"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
        }
    }
})

const TechnologiesSection = () => {
    return (
        <div className="pb-24" id="technologies">
            <h2 className="my-20 text-center text-4xl apple">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 flex-col">
                <div className="flex flex-wrap justify-center">
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 m-4">
                        <Flutter />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 m-4">
                        <React />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 m-4">
                        <Firebase />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(1)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 m-4">
                        <Tailwindcss />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 m-4 ">
                        <Postman />
                    </motion.div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <motion.div
                        variants={iconVariants(1)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 m-4 ">
                        <Dart />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 m-4 ">
                        <Git />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 m-4 ">
                        <Postgresql />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 m-4 ">
                        <Figma />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 m-4 ">
                        <Nodejs />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default TechnologiesSection
