"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const statsData = [
    { label: "Projects Completed", value: 120 },
    { label: "Happy Clients", value: 85 },
    { label: "Years of Experience", value: 5 },
    { label: "Awards Won", value: 12 },
];

export default function AboutUs() {
    const [counts, setCounts] = useState(statsData.map(() => 0));

    useEffect(() => {
        const intervals = statsData.map((stat, i) =>
            setInterval(() => {
                setCounts((prev) => {
                    const newCounts = [...prev];
                    if (newCounts[i] < stat.value) {
                        newCounts[i] += 1;
                    }
                    return newCounts;
                });
            }, 30)
        );

        return () => intervals.forEach((interval) => clearInterval(interval));
    }, []);

    return (
        <section className="bg-white py-16 px-6 ml-8 md:px-16">
            {/* Heading */}
            <div className="text-center mb-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-gray-800"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Company
                </motion.h2>
                <motion.div
                    className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                />
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Stats */}
                <div className="grid grid-cols-2 gap-8">
                    {statsData.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="bg-blue-500 p-6 rounded-xl shadow hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white text-center">
                                {counts[i]}+
                            </h3>
                            <p className="text-gray-200 mt-2 text-center">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side - Company Intro */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                        Who We Are
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-xl text-center">
                        <span className="text-blue-600">Hub Sol</span> is providing custom, professional and affordable website designing & development services for your business
                        in Pakistan. We specialize in helping small businesses to establish their digital brand and dominate the competition
                        with modern and smart web design.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4 text-xl text-center">
                        <span className="text-blue-600">Hub Sol</span> is Founded in November 2009 with the aim of providing quality web design
                        in <span className="text-blue-600">Lahore</span> with the commitment of customer relationship management services.                    </p>
                </motion.div>
            </div>
        </section>
    );
}
