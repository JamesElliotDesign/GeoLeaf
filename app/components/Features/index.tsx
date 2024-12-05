"use client"
import { motion } from 'framer-motion';
import Image from "next/image";

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                
                {/* Column-1 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">
                        Why Choose GeoLeaf
                    </h2>
                    <p className="lg:text-lg font-normal text-bluish text-center md:text-start">
                        GeoLeaf is a mission-driven platform dedicated to tackling global water scarcity by leveraging blockchain technology. Through staking, project owners can create custom pools that attract investors, while both parties contribute to sustainable water solutions for communities in need. GeoLeaf combines financial growth with social impact, ensuring every token staked supports accessible, clean water initiatives worldwide.
                    </p>
                </motion.div>

                {/* Column-2 */}
                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Image 
                        src="/images/Features/WHYCHOOSE.svg"  // Replace with your actual image path
                        alt="Feature Image"
                        width={400}  // Adjust width and height as needed
                        height={400}
                        className="rounded-lg"
                    />
                </motion.div>
                
            </div>
        </div>
    )
}

export default Features;
