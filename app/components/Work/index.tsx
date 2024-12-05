"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Pools',
        subheading: 'View the available staking pools on the GeoLeaf dApp. If you are a project owner, you can create your own.',
    },
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Stake',
        subheading: 'Choose to stake your tokens or NFTs within our platform, allowing you to maximize your assets over time.',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Rewards',
        subheading: 'You have the choice to withdraw your rewards periodically or compound them to boost your potential earnings.',
    },
]

const Work = () => {
    return (
        <div id="about">
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className='text-offwhite text-3xl md:text-5xl font-bold mb-3'
                    >
                        How It Works
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6 }}
                        viewport={{ once: true }}
                        className='text-bluish md:text-lg font-normal leading-8'
                    >
                        Discover how you can participate in staking pools, maximize your assets, and manage rewards all within the GeoLeaf dApp.
                    </motion.p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>
                    {workdata.map((items, i) => (
                        <motion.div
                            key={i}
                            className='card-b p-8'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Banner/arrowEight.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work;
