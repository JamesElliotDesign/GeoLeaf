"use client"
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

// Hook to count up when triggered
const useCountUp = (end: number, duration = 2, startCount: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCount) return;

        let startValue = 0;
        const increment = end / (duration * 60); // Frame updates for smooth effect

        const handle = setInterval(() => {
            startValue += increment;
            if (startValue >= end) {
                setCount(end);
                clearInterval(handle);
            } else {
                setCount(Math.floor(startValue));
            }
        }, 1000 / 60);

        return () => clearInterval(handle);
    }, [end, duration, startCount]);

    return count;
};

const History = () => {
    const [startCountWells, setStartCountWells] = useState(false);
    const [startCountPeople, setStartCountPeople] = useState(false);
    const [startCountProgress, setStartCountProgress] = useState(false);

    return (
        <div className="mx-auto max-w-5xl pt-20 pb-60 px-6" id="history-section">
            <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-offwhite text-3xl md:text-5xl font-bold mb-6"
            >
                Our Impact
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-bluish md:text-lg font-normal leading-8 mb-10"
            >
                Explore our journey of making a difference through these impactful moments captured on video. Each story reflects our commitment to providing fresh water access and creating lasting change for communities in need.
            </motion.p>

            {/* Impact Stats Section */}
            <div className="impact-statistics flex flex-col md:flex-row justify-center items-center mb-16 space-y-8 md:space-y-0 md:space-x-12 text-center">
                {/* Total Wells Completed */}
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setStartCountWells(true)}
                >
                    <div className="impact-number w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        {useCountUp(4, 1, startCountWells)}
                    </div>
                    <p className="text-bluish mt-4">Water wells refurbished</p>
                </motion.div>

                {/* People Impacted */}
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setStartCountPeople(true)}
                >
                    <div className="impact-number w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        {useCountUp(3422, 2, startCountPeople)}
                    </div>
                    <p className="text-bluish mt-4">People with fresh water access</p>
                </motion.div>

                {/* Program in Progress */}
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setStartCountProgress(true)}
                >
                    <div className="impact-number w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        {useCountUp(1, 2, startCountProgress)}
                    </div>
                    <p className="text-bluish mt-4">Well refurbishment in process</p>
                </motion.div>
            </div>

            {/* Media Section */}
            <motion.h4
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-white text-2xl font-bold mb-6"
            >
                Media
            </motion.h4>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Video 1 */}
                <motion.div
                    className="w-full h-80 md:h-96"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/3uuhJtWBpPM"
                        title="Video 1"
                        className="w-full h-full rounded-lg shadow-md"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>

                {/* Video 2 */}
                <motion.div
                    className="w-full h-80 md:h-96"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/LrEEG6kj5GQ"
                        title="Video 2"
                        className="w-full h-full rounded-lg shadow-md"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>

                {/* Video 3 */}
                <motion.div
                    className="w-full h-80 md:h-96"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/b_1deRoN2YE"
                        title="Video 3"
                        className="w-full h-full rounded-lg shadow-md"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
};

export default History;
