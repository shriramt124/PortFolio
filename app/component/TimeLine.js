'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ExperienceData = [
    {
        id: 1,
        years: 'Nov 2024 - Present',
        role: 'Full Stack Developer',
        company: 'Tweak Info Services',
        description: 'Leading Full Stack development  for enterprise applications using Next.js, React and Tailwind CSS.',
        skills: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion',"Javascript","Python"]
    }
];

const ExperienceItem = ({ item, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const x = useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? -50 : 50, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale, x }}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 relative`}
        >
            {/* Timeline dot and line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1">
                <div className="h-full w-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-20"></div>
            </div>
            <div className="hidden md:block absolute left-1/2 top-7 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 z-10 shadow-lg shadow-blue-500/50"></div>

            {/* Year marker */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 px-4 md:px-8">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 shadow-lg shadow-blue-500/10"
                >
                    <h3 className="text-blue-400 text-xl font-bold mb-1">{item.years}</h3>
                    <h4 className="text-gray-200 text-base">{item.company}</h4>
                </motion.div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 px-4 md:px-8">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 shadow-lg shadow-purple-500/10"
                >
                    <h3 className="text-white text-xl font-bold mb-2">{item.role}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                            <span
                                key={skillIndex}
                                className="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function ExperienceTimeline() {
    return (
        <section className="py-16 bg-black text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        My Experience
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
                </motion.div>

                <div className="relative">
                    {ExperienceData.map((item, index) => (
                        <ExperienceItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}