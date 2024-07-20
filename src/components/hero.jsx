import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import heroPic from "../assets/heroPicture.jpg";

const HeroSection = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Mobile Developer", "Frontend Developer", "Backend Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-10 py-32 px-6">
            <div className="flex flex-wrap">
                <div >
                    <div className="flex flex-col items-start ">
                        <motion.h2
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                            className="pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
                        >
                            Muhammad Cendekia Rayhan
                        </motion.h2>
                        <span className="text-3xl font-thin lg:mb-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                ref={typedElement}
                                className="bg-gradient-to-r from-blue-500 via-slate-500 to-white bg-clip-text text-transparent"
                            ></motion.span>
                        </span>
                        <motion.p
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                            className="my-2 mb-10 max-w-xl">
                            Im a passionate programmer with a diverse skill set spanning mobile,frontend, and backend development.
                            From crafting intuitive user interfaces to building robust backend systems,I thrive on transforming complex problems into elegant solutions.
                            My journey in programming is fueled by a relentless curiosity and a commitment to continuous learning,
                            enabling me to stay at the forefront of technological advancements. Let's embark on a journey to innovate, create, and build the future together.
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <img src={heroPic} alt="Muhammad Cendekia Rayhan" className="w-2/4 rounded-3xl" style={{ maxWidth: '30rem' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;




