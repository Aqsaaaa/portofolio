import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram, } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const tabs = [
    { id: 'home', label: "Home", path: "/" },
    { id: 'aboutme', label: "About Me", path: "/aboutme" },
    { id: 'recent', label: "Recent Work", path: "/recent" },
    { id: 'framework', label: "Framework Skill", path: "/framework" },
];

const NavbarSection = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [navbarColor, setNavbarColor] = useState('transparent');
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const controls = useAnimation();
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }

        if (window.scrollY > 50) {
            setNavbarColor('transparent-blur');
            controls.start({ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)', transition: { duration: 0.5 } });
        } else {
            setNavbarColor('transparent');
            controls.start({ backgroundColor: 'transparent', backdropFilter: 'blur(0px)', transition: { duration: 0.5 } });
        }
        lastScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <motion.nav
            initial={{ y: -100, backgroundColor: navbarColor }}
            animate={{ y: showNavbar ? 0 : -100 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`fixed w-full mx-auto flex items-center justify-between px-6 z-50 apple`}
        >
            <motion.div
                className="fixed inset-0 w-full h-20"
                animate={controls}
                style={{ zIndex: -1 }}
            />
            <div className="flex flex-shrink-0 items-center">
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50 relative">
                        {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>
                <div className={`hidden md:flex `}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-4 py-2 rounded-lg z-10 ${activeTab === tab.id ? "text-white" : "text-white apple"}`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white z-0"
                                    style={{ borderRadius: "9999px" }}
                                    transition={{ type: "spring", duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-20 mix-blend-exclusion">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="py-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/cendekiaqsa/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/Aqsaaaa" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/aqsakjo_" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-4 z-40"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setIsMenuOpen(false);
                            }}
                            className={`relative px-4 py-2 rounded-lg text-white text-xl apple`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white z-0"
                                    style={{ borderRadius: "9999px" }}
                                    transition={{ type: "spring", duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-20 mix-blend-exclusion">{tab.label}</span>
                        </button>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default NavbarSection;
