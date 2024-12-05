"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import { motion } from 'framer-motion';

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    { imgSrc: "/images/Companies/bridit.png" },
    { imgSrc: "/images/Companies/previal.png" },
    { imgSrc: "/images/Companies/startit.png" },
    { imgSrc: "/images/Companies/masterkey.png" },
    { imgSrc: "/images/Companies/interlink.png" },
]

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className='text-center bg-lightpink'
            >
                <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Slider {...settings}>
                            {data.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={item.imgSrc} alt={`company-logo-${i}`} />
                                </motion.div>
                            ))}
                        </Slider>
                    </motion.div>
                </div>
            </motion.div>
        )
    }
}
