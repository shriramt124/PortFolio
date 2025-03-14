'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const achievementData = [
    {
        id: 1,
        year: '2024',
        title: 'LeetCode',
        subtitle: 'Achieved Guardian rank',
        description: 'Solved 750+ problems across all difficulty levels. Ranked in the top 2% globally.',
        achievements: [
            'Secured 125th place in Weekly Contest 387',
            'Completed Dynamic Programming series',
            'Consistent 100-day coding streak'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        ),
        color: 'from-yellow-400 to-amber-600'
    },
    {
        id: 2,
        year: '2023',
        title: 'CodeForces',
        subtitle: 'Reached Candidate Master',
        description: 'Participated in 40+ contests with a peak rating of 1950. Specialized in graph algorithms and data structures.',
        achievements: [
            'Top 100 in Educational Round 154',
            'Regular Division 1 participant',
            'Published 3 original problems'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
        ),
        color: 'from-blue-400 to-blue-600'
    },
    {
        id: 3,
        year: '2023',
        title: 'Hackathons',
        subtitle: 'Won 2 major hackathons',
        description: 'Developed innovative solutions under time constraints, showcasing problem-solving and teamwork skills.',
        achievements: [
            'First place in Global Hack Week: AI/ML Track',
            'Best UI/UX award at HackTech 2023',
            'Mentored 3 teams in local hackathons'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
        ),
        color: 'from-green-400 to-emerald-600'
    },
    {
        id: 4,
        year: '2022',
        title: 'LinkedIn',
        subtitle: 'Built professional network',
        description: 'Expanded professional network to 1500+ connections with focus on tech industry leaders and developers.',
        achievements: [
            'Published 12 technical articles',
            'Received 50+ skill endorsements',
            'Connected with engineers from FAANG companies'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
        ),
        color: 'from-purple-400 to-fuchsia-600'
    },
    {
        id: 5,
        year: '2021',
        title: 'Open Source',
        subtitle: 'Active contributor',
        description: 'Contributed to multiple open-source projects with focus on web development frameworks and tools.',
        achievements: [
            'Merged 25+ PRs to popular repositories',
            'Created 2 libraries with 100+ stars',
            'Recognized as top contributor in Next.js community'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
        ),
        color: 'from-teal-400 to-cyan-600'
    }
];

const JourneyItem = ({ item, isActive, onClick }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale }}
            className="relative"
        >
            {/* Timeline with year */}
            <div className="flex items-center mb-4">
                <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center bg-black border-2 border-opacity-50 z-10 cursor-pointer
            ${isActive ? 'border-white' : 'border-gray-700'}`}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => onClick(item.id)}
                >
                    <span className="text-white font-bold">{item.year}</span>
                </motion.div>
                <div className="h-0.5 flex-grow bg-gradient-to-r from-gray-800 to-gray-900"></div>
            </div>

            {/* Content */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-12 overflow-hidden"
                    >
                        <div className="p-6 bg-black bg-opacity-50 rounded-lg border border-gray-800 shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mr-4`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <p className={`text-sm bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.subtitle}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4">{item.description}</p>

                            <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                            <ul className="space-y-2">
                                {item.achievements.map((achievement, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start"
                                    >
                                        <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-1.5 mr-2`}></span>
                                        <span className="text-gray-300">{achievement}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function CodingJourney() {
    const [activeId, setActiveId] = useState(1);

    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        My Coding <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From competitive programming to professional networking, explore my achievements and milestones in the world of coding.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {achievementData.map((item) => (
                        <JourneyItem
                            key={item.id}
                            item={item}
                            isActive={activeId === item.id}
                            onClick={setActiveId}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}