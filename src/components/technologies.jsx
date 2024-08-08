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
                        style={{ minWidth: '1rem' }}
                        className="card flex items-center justify-center m-4">
                        <div
                            className="rounded-xl bg-slate-950 p-4">
                            <Flutter />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="card flex items-center justify-center m-4">
                        <div className="rounded-xl bg-slate-950 p-4">
                            <React />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="card flex items-center justify-center m-4">
                        <div className="rounded-xl bg-slate-950 p-4">
                            <Firebase />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(1)}
                        initial="initial"
                        animate="animate"
                        className="card flex items-center justify-center m-4">
                        <div
                            className="rounded-xl bg-slate-950 p-4">
                            <Tailwindcss />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="card flex items-center justify-center m-4 ">
                        <div
                            className="rounded-xl bg-slate-950 p-4">
                            <Postman />
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-wrap justify-center">
                    <motion.div
                        variants={iconVariants(1)}
                        initial="initial"
                        animate="animate"
                        className="card flex items-center justify-center m-4 ">
                        <div
                            className="rounded-xl bg-slate-950 p-4">
                            <Dart />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="card flex items-center justify-center m-4 ">
                        <div
                            className="rounded-xl bg-slate-950 p-4">
                            <Git />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="card flex items-center justify-center m-4 ">
                        <div
                            className="rounded-xl bg-slate-950 p-4">
                            <Postgresql />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="card flex items-center justify-center m-4 ">
                        <div
                            className="rounded-xl bg-slate-950 p-4">
                            <Figma />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="card flex items-center justify-center m-4 ">
                        <div
                            className="rounded-xl bg-slate-950 p-4">
                            <Nodejs />
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default TechnologiesSection
