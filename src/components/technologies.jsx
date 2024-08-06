import { motion } from "framer-motion"
import { SiReact, SiFlutter, SiFirebase, SiTailwindcss, SiPostman } from "react-icons/si"

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
        <div className="border-b-4 border-neutral-800 pb-24" id="technologies">
            <h2 className="my-20 text-center text-4xl apple">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    style={{ minWidth: '1rem' }}
                    className="card flex items-center justify-center m-4">
                    <div
                        className="rounded-xl bg-black p-4">
                        <SiReact className="text-6xl text-cyan-400" />
                    </div>
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="card flex items-center justify-center m-2">
                    <div
                        className="rounded-xl bg-black p-4">
                        <SiFirebase className="text-6xl text-yellow-400" />
                    </div>
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="card flex items-center justify-center m-4">
                    <div
                        className="rounded-xl bg-black p-4">
                        <SiFlutter className="text-6xl text-sky-400" />
                    </div>
                </motion.div>
                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className="card flex items-center justify-center m-4">
                    <div
                        className="rounded-xl bg-black p-4">
                        <SiTailwindcss className="text-6xl text-cyan-400" />
                    </div>
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="card flex items-center justify-center m-4 ">
                    <div
                        className="rounded-xl bg-black p-4">
                        <SiPostman className="text-6xl text-orange-600" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default TechnologiesSection
