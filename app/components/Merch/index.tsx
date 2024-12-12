"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Merch = () => {
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
                    <Image
                        src={'/images/Trade/geoleafplatform.png'}
                        alt="GeoLeaf Merchandise Image"
                        width={715}
                        height={475}
                        className="rounded-lg"
                    />
                </motion.div>

                {/* Column-2 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center sm:text-start">
                        GeoLeaf Merchandise
                    </h3>
                    <p className="lg:text-lg font-normal text-lightblue mb-8 text-center sm:text-start">
                        Explore exclusive GeoLeaf merchandise on Prevail Shop! From stylish apparel to unique accessories, support the GeoLeaf community while showcasing your passion for the platform. Every item is designed with care, embodying the spirit of innovation and sustainability.
                    </p>
                    <div className="flex justify-center sm:justify-start">
                        <a
                            href="https://www.prevailshop.com/collections/geoleaf-token-merchandise"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton"
                        >
                            Shop Now
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Merch;
