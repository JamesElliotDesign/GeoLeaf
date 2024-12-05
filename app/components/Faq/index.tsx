"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface faqdata {
    heading: string;
    subheading: { name: string; url: string }[];
}

const faqdata: faqdata[] = [
    {
        heading: "Token DEX",
        subheading: [
            { name: "Pankcake Swap", url: "https://pancakeswap.finance/?outputCurrency=0x7Fdf0d77f9F906ADDc7F3B75A73df941AE65D7d6" },
            { name: "Prevail Swap", url: "https://swap.prevailtoken.com/?referrer=wizards" }
        ]
    },
    {
        heading: "NFT Marketplace",
        subheading: [
            { name: "Element", url: "https://element.market/collections/the-water-wizards-glt?search%5Btoggles%5D[0]=BUY_NOW" },
            { name: "RareBoard", url: "https://www.rareboard.com/the-water-wizards-glt" }
        ]
    }
];

const Faq = () => {
    return (
        <div className="mx-auto max-w-5xl pt-40 pb-20 px-6" id="marketplaces">
            <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-offwhite text-3xl md:text-5xl font-bold mb-8"
            >
                GeoLeaf
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
                viewport={{ once: true }}
                className="text-center text-bluish md:text-lg font-normal leading-8 mt-6 mb-10"
            >
                Discover and purchase both GeoLeaf and Water Wizard NFTs on our expanding marketplace! GeoLeaf is committed to growing its presence, offering you more ways to engage and invest in our unique digital assets. Stay tuned as we continue to explore new markets and bring even more opportunities to our community.
            </motion.p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">
                            {faqdata.map((items, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5"
                                >
                                    <div className="text-offwhite md:text-2xl font-medium mb-2">
                                        {items.heading}
                                    </div>
                                    <div className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
                                        {items.subheading.map((link, index) => (
                                            <div key={index}>
                                                <a 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="gradient-hover underline"
                                                >
                                                    {link.name}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Column-2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="mt-32"
                    >
                        <Image src={'/images/Faq/marketplace.svg'} alt="faq-image" width={535} height={335} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
