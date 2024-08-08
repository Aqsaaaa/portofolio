import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import heroPic from "../assets/heroPicture.jpg";

const HeroSection = () => {
    const typedElement = useRef(null);
    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            }
        }
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

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
        <div className="border-b border-transparent pb-10 py-32 px-8 max-lg:py-20" id="home">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div
                        className="flex flex-col items-start ">
                        <motion.h2
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className={`max-lg:pb-8 lg:pb-14 text-6xl font-thin tracking-tight lg:mt-16 max-lg:text-4xl apple`}>
                            Muhammad Cendekia Rayhan
                        </motion.h2>
                        <span className="text-3xl font-thin lg:mb-4">
                            <motion.span
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                ref={typedElement}
                                className="max-lg:text-2xl bg-gradient-to-r from-blue-500 via-slate-500 to-white bg-clip-text text-transparent apple"
                            ></motion.span>
                        </span>
                        <motion.p
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className={`my-2 mb-10 max-lg:text-xs text-xl apple text-justify w-full`}>
                            Im a passionate programmer with a diverse skill set spanning mobile,frontend, and backend development.
                            From crafting intuitive user interfaces to building robust backend systems,I thrive on transforming complex problems into elegant solutions.
                            My journey in programming is fueled by a relentless curiosity and a commitment to continuous learning,
                            enabling me to stay at the forefront of technological advancements. Let's embark on a journey to innovate, create, and build the future together.
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:p-8 lg:w-1/2">
                    <motion.div
                        variants={container(2)}
                        initial={{ x: 100, opacity: 0 }}
                        animate="visible"
                        className="flex justify-center lg:justify-end">
                        <img src={heroPic} alt="Muhammad Cendekia Rayhan" className="w-2/3 rounded-3xl" style={{ minWidth: '20rem' }} />
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export default HeroSection;

