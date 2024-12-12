"use client"
import { motion } from 'framer-motion';
import React from "react";

const Token = () => {
    return (
        <div className="mx-auto max-w-5xl pt-20 px-6" id="token-section">
            <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-offwhite text-3xl md:text-5xl font-bold mb-5"
            >
                $GLT Token Overview
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-bluish md:text-lg font-normal leading-8 mt-6 mb-10"
            >
                This section provides an overview of the $GLT token, its purpose, and other important information about the token. It serves as a guide for potential investors.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Supply Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-navyblue p-8 rounded-lg shadow-md text-center"
                >
                    <h4 className="text-white text-xl font-bold mb-2">Total Supply</h4>
                    <p className="text-3xl gradient-text font-semibold">1,000,000,000</p>
                    <div className="relative w-full h-4 bg-darkblue rounded-full mt-2">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            className="absolute left-0 top-0 h-4 rounded-full"
                            style={{ background: 'linear-gradient(to right, #48bed8, #787dff)' }}
                        />
                    </div>
                </motion.div>

                {/* Buy Tax Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-navyblue p-8 rounded-lg shadow-md text-center"
                >
                    <h4 className="text-white text-xl font-bold mb-2">Buy Tax</h4>
                    <p className="text-3xl gradient-text font-semibold">5%</p>
                    <div className="relative w-full h-4 bg-darkblue rounded-full mt-2">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '5%' }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            className="absolute left-0 top-0 h-4 rounded-full"
                            style={{ background: 'linear-gradient(to right, #48bed8, #787dff)' }}
                        />
                    </div>
                </motion.div>

                {/* Sell Tax Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-navyblue p-8 rounded-lg shadow-md text-center"
                >
                    <h4 className="text-white text-xl font-bold mb-2">Sell Tax</h4>
                    <p className="text-3xl gradient-text font-semibold">5%</p>
                    <div className="relative w-full h-4 bg-darkblue rounded-full mt-2">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '5%' }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            className="absolute left-0 top-0 h-4 rounded-full"
                            style={{ background: 'linear-gradient(to right, #48bed8, #787dff)' }}
                        />
                    </div>
                </motion.div>
            </div>

            <div className="mt-12">
                <motion.h4
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-center text-white text-2xl font-bold mb-6"
                >
                    Token Distribution
                </motion.h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Development Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-navyblue p-8 rounded-lg shadow-md"
                    >
                        <h5 className="text-white text-xl font-bold mb-2">Development</h5>
                        <p className="text-lg gradient-text font-semibold">1%</p>
                        <div className="relative w-full h-4 bg-darkblue rounded-full mt-2">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '1%' }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true }}
                                className="absolute left-0 top-0 h-4 rounded-full"
                                style={{ background: 'linear-gradient(to right, #48bed8, #787dff)' }}
                            />
                        </div>
                        <p className="text-bluish font-normal mt-2">Allocated to the development team.</p>
                    </motion.div>

                    {/* Reflections Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-navyblue p-8 rounded-lg shadow-md"
                    >
                        <h5 className="text-white text-xl font-bold mb-2">Reflections</h5>
                        <p className="text-lg gradient-text font-semibold">2%</p>
                        <div className="relative w-full h-4 bg-darkblue rounded-full mt-2">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '2%' }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true }}
                                className="absolute left-0 top-0 h-4 rounded-full"
                                style={{ background: 'linear-gradient(to right, #48bed8, #787dff)' }}
                            />
                        </div>
                        <p className="text-bluish font-normal mt-2">Reserved for rewards.</p>
                    </motion.div>

                    {/* Charity Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-navyblue p-8 rounded-lg shadow-md"
                    >
                        <h5 className="text-white text-xl font-bold mb-2">Charity</h5>
                        <p className="text-lg gradient-text font-semibold">1%</p>
                        <div className="relative w-full h-4 bg-darkblue rounded-full mt-2">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '1%' }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true }}
                                className="absolute left-0 top-0 h-4 rounded-full"
                                style={{ background: 'linear-gradient(to right, #48bed8, #787dff)' }}
                            />
                        </div>
                        <p className="text-bluish font-normal mt-2">Funds for charitable projects.</p>
                    </motion.div>

                    {/* DEX Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-navyblue p-8 rounded-lg shadow-md"
                    >
                        <h5 className="text-white text-xl font-bold mb-2">DEX</h5>
                        <p className="text-lg gradient-text font-semibold">1%</p>
                        <div className="relative w-full h-4 bg-darkblue rounded-full mt-2">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '1%' }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true }}
                                className="absolute left-0 top-0 h-4 rounded-full"
                                style={{ background: 'linear-gradient(to right, #48bed8, #787dff)' }}
                            />
                        </div>
                        <p className="text-bluish font-normal mt-2">Allocation to pancake swap.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Token;
