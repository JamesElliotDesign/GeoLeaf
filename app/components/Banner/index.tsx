"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { motion } from 'framer-motion';

const Banner = () => {
    const [isOpen, setOpen] = useState(false);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.2 } }
    };

    const synchronousVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
    };

    return (
        <motion.div 
            className='bg-image relative' 
            id="home-section"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className='arrowOne' variants={synchronousVariants}></motion.div>
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="wUswlrfKyVk" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
                <div className='height-work'>
                    <motion.div 
                        className='grid grid-cols-1 lg:grid-cols-12 my-16' 
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className='arrowTwo' variants={synchronousVariants}></motion.div>

                        <div className='col-span-7'>
                            <motion.h1 
                                className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center"
                                variants={synchronousVariants}
                            >
                                Stake Crypto & <br /> NFTs On GeoLeaf
                            </motion.h1>
                            <motion.p 
                                className='text-white md:text-lg font-normal mb-10 md:text-start text-center'
                                variants={synchronousVariants}
                            >
                                Transforming Access to Clean Water and Building the Future of Blockchain Staking in Crypto & NFTs.
                            </motion.p>
                            <motion.div 
                                className='flex align-middle justify-center md:justify-start' 
                                variants={synchronousVariants}
                            >
                                <a href="https://pancakeswap.finance/?outputCurrency=0x7Fdf0d77f9F906ADDc7F3B75A73df941AE65D7d6" target="_blank" rel="noopener noreferrer">
                                    <motion.button 
                                        className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Buy $GLT
                                    </motion.button>
                                </a>
                                <motion.button 
                                    onClick={() => setOpen(true)} 
                                    className='bg-transparent flex justify-center items-center text-white'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image src={'/images/Banner/playbutton.svg'} alt="button-image" className='mr-3' width={47} height={47} />
                                    About Us
                                </motion.button>
                            </motion.div>
                        </div>

                        <motion.div 
                            className='col-span-5 lg:-m-48'
                            initial="hidden"
                            animate="visible"
                            variants={synchronousVariants}
                        >
                            <motion.div className='arrowThree' variants={synchronousVariants}></motion.div>
                            <motion.div className='arrowFour' variants={synchronousVariants}></motion.div>
                            <motion.div className='arrowFive' variants={synchronousVariants}></motion.div>
                            <Image src="/images/Banner/banner.png" alt="nothing" width={1013} height={760} />
                            <motion.div className='arrowSix' variants={synchronousVariants}></motion.div>
                            <motion.div className='arrowSeven' variants={synchronousVariants}></motion.div>
                            <motion.div className='arrowEight' variants={synchronousVariants}></motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Banner;
