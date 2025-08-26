"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaLaptopCode,
  FaRocket,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    title: "Idea & Analysis Gathering",
    desc: "The first step of designing a website is to analyze and gather information about the brand.",
    icon: <FaLightbulb className="text-pink-500 text-3xl" />,
    color: "border-pink-500",
  },
  {
    title: "Designing & Developing",
    desc: "We design the layout and start development according to technology standards and marketing trends.",
    icon: <FaLaptopCode className="text-yellow-500 text-3xl" />,
    color: "border-yellow-500",
  },
  {
    title: "Testing & Launching",
    desc: "After development and designing, we test the website with all features and launch it online.",
    icon: <FaRocket className="text-green-500 text-3xl" />,
    color: "border-green-500",
  },
];

export default function WorkflowTimeline() {
  return (
    <section className="bg-white py-20 px-6">
     <div className="text-center mb-12">
                     <motion.h2
                         className="text-4xl md:text-5xl font-bold text-gray-800"
                         initial={{ opacity: 0, y: -30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6 }}
                     >
                         Our Workflow
                     </motion.h2>
                     <motion.div
                         className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"
                         initial={{ scaleX: 0 }}
                         whileInView={{ scaleX: 1 }}
                         transition={{ duration: 0.6 }}
                     />
                 </div>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Dashed Line */}
        <div className="absolute left-1/2 top-0 h-full border-l-4 border-dashed border-gray-300 transform -translate-x-1/2"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`flex w-full ${
              index % 2 === 0 ? "justify-start pr-4" : "justify-end pl-4"
            }`}
          >
            {/* Card */}
            <div
              className={`bg-white shadow-lg border ${step.color} border-2 mr-20 ml-20 mb-4 rounded-xl p-5 w-72 md:w-80 relative`}
            >
              <div className="flex items-center gap-3">
                {/* Circle Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full border-4 ${step.color} shadow-md`}
                >
                  {step.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{step.desc}</p>

              {/* Connector Dot */}
              <div
                className={`absolute top-6 ${
                  index % 2 === 0 ? "-right-8" : "-left-8"
                } w-4 h-4 rounded-full border-4 ${step.color} bg-white`}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
