import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

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

    const controls = useAnimation();
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }

        if (window.scrollY > 50) {
            setNavbarColor('black');
            controls.start({ backgroundColor: 'black', transition: { duration: 0.5 } });
        } else {
            setNavbarColor('transparent');
            controls.start({ backgroundColor: 'transparent', transition: { duration: 0.5 } });
        }
        lastScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: showNavbar ? 0 : -100 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`fixed w-full mx-auto mb-20 flex items-center justify-between py-2 px-4 z-50`} // Ensure z-index is high enough
        >
            <motion.div
                className="fixed inset-0 w-full h-24"
                animate={controls}
                style={{ zIndex: -1 }}
            />
            <div className="flex flex-shrink-0 items-center">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-4 py-2 rounded-lg z-10 ${activeTab === tab.id ? "text-white" : "text-white"}`}
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
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
        </motion.nav>
    );
};

export default NavbarSection;
