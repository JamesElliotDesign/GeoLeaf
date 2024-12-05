"use client"
import React from "react";
import { motion } from 'framer-motion';

const MeetTheTeam = () => {
    const teamMembers = [
        {
            name: "Steve C",
            title: "CEO",
            bio: "Experienced leader with a background in blockchain and financial technology.",
            image: "/images/Team/member1.png"
        },
        {
            name: "David E",
            title: "CTO",
            bio: "Passionate about technology and innovations in the blockchain space.",
            image: "/images/Team/member4.png"
        },
        {
            name: "James B",
            title: "Lead Developer",
            bio: "Full-stack developer specializing in dApp development and smart contracts.",
            image: "/images/Team/member2.png"
        },
        {
            name: "Ryan R",
            title: "Marketing",
            bio: "Expert in digital marketing strategies and community building.",
            image: "/images/Team/member3.png"
        }
    ];

    return (
        <div className="mx-auto max-w-5xl pt-40 pb-20 px-6" id="meet-the-team-section">
            <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-offwhite text-3xl md:text-5xl font-bold mb-8"
            >
                Meet The Team
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-bluish md:text-lg font-normal leading-8 mt-6 mb-10"
            >
                Meet the team bringing this project to life! Our experts in blockchain, development, and marketing are dedicated to making our vision a reality and building a thriving community.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="text-center bg-navyblue p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={member.image}
                            alt={`${member.name} Photo`}
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h4 className="text-white text-xl font-semibold mb-2">{member.name}</h4>
                        <p className="text-bluish text-sm font-medium">{member.title}</p>
                        <p className="text-bluish text-base font-light mt-2">{member.bio}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MeetTheTeam;
