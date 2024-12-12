"use client"
import React from "react";
import { motion } from 'framer-motion';

const Roadmap = () => {
    const roadmapData = [
        { quarter: "Quarter 1 2025", description: "Launch the GeoLeaf v2 token along with our fully revamped website." },
        { quarter: "Quarter 2 2025", description: "Unveil the new GeoLeaf dApp and initiate our NFT staking pool." },
        { quarter: "Quarter 3 2025", description: "Expand our reach with targeted marketing and onboard additional NFT projects seeking staking solutions." },
        { quarter: "Quarter 4 2025", description: "Enhance and scale the GeoLeaf dApp with new features, supported by strategic marketing efforts." },
    ];

    return (
        <div className="mx-auto max-w-5xl pt-20 px-6 pb-20" id="roadmap-section">
            <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-offwhite text-3xl md:text-5xl font-bold mb-3"
            >
                Roadmap
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-bluish md:text-lg font-normal leading-8 mt-6 mb-10"
            >
                Our roadmap outlines the strategic milestones designed to fuel the growth and success of GeoLeaf. From launching core components to expanding our platform’s reach and functionality, each phase is carefully crafted to drive innovation and offer meaningful value to our community. Join us as we evolve, making GeoLeaf the ultimate destination for crypto and NFT staking.
            </motion.p>

            {/* Timeline container */}
            <div className="relative">
                {/* Animated vertical timeline line */}
                <motion.div 
                    initial={{ background: 'linear-gradient(to bottom, #0c1b44, #0c1b44)' }}
                    whileInView={{ background: 'linear-gradient(to bottom, #fff, #fff)' }}
                    transition={{ duration: 2.5 }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 transform -translate-x-1/2 h-full w-1"
                ></motion.div>

                {/* Roadmap items */}
                {roadmapData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`mb-10 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'} relative`}
                    >
                        <div className={`w-1/2 ${index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'} bg-navyblue p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'ml-10' : 'mr-10'}`}>
                            <h4 className="text-white text-xl mb-4">{item.quarter}</h4>
                            <p className="text-base font-normal text-bluish">
                                {item.description}
                            </p>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-darkblue roadmap-bg w-5 h-5 rounded-full top-2"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
