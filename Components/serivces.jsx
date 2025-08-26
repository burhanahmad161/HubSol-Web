"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaGlobe, FaMobileAlt, FaPaintBrush, FaIdBadge, FaApple, FaVideo, FaPen, FaUserFriends, FaRegSmileBeam, FaServer, FaShareAlt, FaGlobeAmericas, FaTools, FaShoppingCart, FaSearch, FaBrush } from "react-icons/fa";
const services = [
    {
        title: "Web Development",
        desc: "We build fast, secure, and scalable websites using the latest technologies, ensuring your brand has a strong online presence.",
        icon: <FaDesktop className="text-green-500" />
    },
    {
        title: "Web Design",
        desc: "Our creative team designs modern, user-friendly, and responsive websites tailored to your business needs and customer experience.",
        icon: <FaBrush className="text-red-500" />
    },
    {
        title: "Graphic Design",
        desc: "We deliver eye-catching graphics and visuals that strengthen your branding, marketing campaigns, and overall digital identity.",
        icon: <FaRegSmileBeam className="text-yellow-500" />
    },
    {
        title: "Mobile Application",
        desc: "Reach more customers with powerful mobile apps. We develop smooth, engaging, and cross-platform applications for all devices.",
        icon: <FaMobileAlt className="text-blue-500" />
    },
    {
        title: "Profile Designing",
        desc: "Stand out with professional profiles that highlight your strengths, skills, and expertise in a visually appealing format.",
        icon: <FaIdBadge className="text-purple-500" />
    },
    {
        title: "Logo Design",
        desc: "Your logo represents your identity. We create unique, timeless, and memorable logos that reflect your brand’s true essence.",
        icon: <FaPaintBrush className="text-pink-500" />
    },
    {
        title: "Web Hosting",
        desc: "We provide fast, reliable, and secure web hosting solutions to keep your site online and running 24/7 without downtime.",
        icon: <FaServer className="text-gray-500" />
    },
    {
        title: "Social Media",
        desc: "Grow your audience with creative and engaging social media campaigns tailored to boost your brand visibility and reach.",
        icon: <FaShareAlt className="text-blue-500" />
    },
    {
        title: "Domain Registration",
        desc: "Secure the perfect domain name for your business with our quick, reliable, and hassle-free domain registration services.",
        icon: <FaGlobeAmericas className="text-green-500" />
    },
    {
        title: "E-Commerce",
        desc: "We build powerful, user-friendly e-commerce websites that make online shopping simple, secure, and convenient for customers.",
        icon: <FaShoppingCart className="text-orange-500" />
    },
    {
        title: "SEO Services",
        desc: "Boost your online visibility with our effective SEO strategies that help you rank higher and attract more organic traffic.",
        icon: <FaSearch className="text-gray-500" />
    },
    {
        title: "Maintenance & Support",
        desc: "We offer ongoing website maintenance and support to ensure your site remains up-to-date, secure, and performing optimally.",
        icon: <FaTools className="text-red-500" />
    },
    {
        title: "Digital Marketing",
        desc: "Expand your online presence with our comprehensive digital marketing services, including PPC and email marketing.",
        icon: <FaGlobe className="text-blue-500" />
    },
    {
        title: "Content Creation",
        desc: "We create high-quality, engaging content that resonates with your audience and drives traffic to your website.",
        icon: <FaPen className="text-purple-500" />
    },
    {
        title: "UI/UX Design",
        desc: "We focus on creating intuitive and engaging user experiences that drive customer satisfaction and loyalty.",
        icon: <FaUserFriends className="text-yellow-500" />
    },
    {
        title: "Video Production",
        desc: "Our team produces stunning videos that effectively communicate your brand message and engage your audience.",
        icon: <FaVideo className="text-red-500" />
    },
    {
        title: "App Design",
        desc: "We create visually stunning and user-friendly app designs that enhance the user experience and drive engagement.",
        icon: <FaMobileAlt className="text-blue-500" />
    },
    {
        title: "IOS Development",
        desc: "Our iOS development services create high-quality, user-friendly applications for Apple devices.",
        icon: <FaApple className="text-gray-500" />
    }

];


export default function ServicesSection() {
    const [index, setIndex] = useState(0);
    const [perView, setPerView] = useState(1);
    const timerRef = useRef(null);

    // Responsive perView
    useEffect(() => {
        const update = () => {
            if (window.innerWidth >= 1024) setPerView(3);
            else if (window.innerWidth >= 768) setPerView(2);
            else setPerView(1);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Auto-slide
    // Auto-slide (move by "page" instead of single item)
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setIndex((prev) => (prev + perView) % services.length);
        }, 3000);
        return () => clearInterval(timerRef.current);
    }, [perView]);
    const style = { transform: `translateX(-${(index / perView) * 100}%)` };

return (
    <section className="py-12 bg-gray-100">
        <div className="text-center mb-12">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-800"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Our Services
            </motion.h2>
            <motion.div
                className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
            />
        </div>
        <div className="overflow-hidden relative max-w-6xl mx-auto">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${(index % services.length) * (100 / perView)}%)` }}
            >
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                            <div className="text-4xl text-blue-600 mb-3 flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
}
