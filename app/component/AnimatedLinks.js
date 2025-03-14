// components/AnimatedLinks.js
"use client"
import React from 'react';
import { motion } from 'framer-motion';

const links = [
    { name: 'LeetCode', url: 'https://leetcode.com', icon: '📚' },
    { name: 'Codeforces', url: 'https://codeforces.com', icon: '🏆' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '🔗' },
    { name: 'CodeChef', url: 'https://codechef.com', icon: '🍴' },
];

const AnimatedLinks = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-black text-white pb-8">
            <h1 className="text-3xl font-bold mb-8">My Profiles</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {links.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-6 py-3 font-medium text-lg bg-gray-900 rounded-lg shadow-lg overflow-hidden group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        {/* Icon */}
                        <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                        <span className="relative z-10 flex items-center gap-2">
                            <span>{link.icon}</span>
                            <span>{link.name}</span>
                        </span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export {AnimatedLinks};