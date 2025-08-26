"use client";
import WhyChooseUsImg from "../Assets/why-choose-us.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                </svg>
            ),
            title: "Expertise-Driven Solution",
            description: "Leverage our extensive experience in web development to ensure success from start to finish."
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 6h18l-2 12H5L3 6zm0-2h18a1 1 0 0 1 1 1v1H2V5a1 1 0 0 1 1-1z" />
                </svg>
            ),
            title: "Competitive Pricing",
            description: "Access cost-effective solutions that deliver high value without compromising on quality."
        }
    ];

    const checklistItems = [
        "Transparent long-term partnerships",
        "Advanced security and code audit practices",
        "Continuous performance optimization",
        "Mission to provide quality and cost-effective services",
        "To make Hub Sol a leading web design company of Pakistan"
    ];

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="rounded-xl overflow-hidden shadow-lg mb-10 border-2 border-blue-800/30">
                        <Image
                            src={WhyChooseUsImg}
                            alt="Business Success"
                            className="w-full h-72 object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col space-y-3 bg-gray-800/50 p-5 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-800/50 transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-100 tracking-tight">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-gray-300">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm uppercase font-semibold text-blue-400 tracking-wider mb-2">
                        Why Choose Us
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                        Your Success – <span className="text-blue-600 py-1 rounded">Our Commitment</span>
                    </h2>
                    {/* Checklist */}
                    <div className="space-y-5 mb-8">
                        {checklistItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 bg-gray-800/30 p-3 rounded-lg border border-gray-700/30 hover:border-blue-800/50 transition-all"
                            >
                                <div className="w-6 h-6 mt-1 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full shadow">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-200 text-sm sm:text-base">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;