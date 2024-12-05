"use client"
import { motion } from 'framer-motion';
import Image from "next/image";

const Trade = () => {
    return (
        <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative">
            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid lg:grid-cols-2 gap-x-5">
                {/* Column-1 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Image src={'/images/Trade/geoleafplatform.png'} alt="macBook-image" width={715} height={475} />
                </motion.div>

                {/* Column-2 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center sm:text-start">
                        Platform Overview
                    </h3>
                    <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">
                        Introducing the GeoLeaf platform: a dynamic staking platform where users can explore an array of exciting staking pools, stake their tokens or NFTs with ease, and project owners can create custom pools tailored to their communities. GeoLeaf empowers users and creators alike, combining flexibility, control, and powerful earning potential—all in one seamless dApp experience.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Trade;
