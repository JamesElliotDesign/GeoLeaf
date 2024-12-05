"use client"
import { motion } from 'framer-motion';

const Simple = () => {
    return (
        <div className="simple-bg relative">
            {/* Animate wizard one and two to come from the left */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="wizard-container"
                style={{ top: "1%", left: "20%" }}
            >
                <div className="wizardtwo"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: true }}
                className="wizard-container"
                style={{ top: "1%", left: "5%" }}
            >
                <div className="wizardone"></div>
            </motion.div>

            <div className="mx-auto max-w-5xl py-24 px-6">
                <motion.h3
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6"
                >
                    Water Wizard NFTs
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6 }}
                    viewport={{ once: true }}
                    className="text-center text-bluish text-lg font-normal mb-8"
                >
                    Summon the power of your Water Wizard NFTs by staking them to unlock exclusive rewards!
                </motion.p>
                <div className="flex justify-center">
                    <motion.a
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.7 }}
                        viewport={{ once: true }}
                        href="https://water-wizards.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton"
                    >
                        Mint Now
                    </motion.a>
                </div>
            </div>

            {/* Animate wizard three and four to come from the right */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="wizard-container"
                style={{ top: "1%", left: "60%" }}
            >
                <div className="wizardthree"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: true }}
                className="wizard-container"
                style={{ top: "1%", left: "75%" }}
            >
                <div className="wizardfour"></div>
            </motion.div>
        </div>
    )
}

export default Simple;
