// components/FrontendSkill.js
"use client"//// components/FrontendSkill.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'Next.js', color: '#FFD700' },
    { name: 'App Router', color: '#8A2BE2' },
    { name: 'MongoDB', color: '#FFD700' },
    { name: 'Tailwind', color: '#32CD32' },
    { name: 'JavaScript', color: '#32CD32' },
    { name: 'CSS', color: 'green' },
];

export default function FrontendSkill() {
    return (
        <div className="flex flex-col items-center justify-center bg-black text-white">
            <h1 className="text-3xl font-bold mb-8">My Frontend Skills</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {skills.map((skill, index) => (
                    <motion.button
                        key={index}
                        className="relative px-4 py-2 font-medium rounded-lg shadow-md group"
                        style={{
                            backgroundColor: 'transparent',
                            border: `2px solid ${skill.color}`,
                            boxShadow: `0 0 5px ${skill.color}, 0 0 10px ${skill.color}`,
                        }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: `0 0 10px ${skill.color}, 0 0 20px ${skill.color}`,
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        <span className="relative z-10">{skill.name}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}