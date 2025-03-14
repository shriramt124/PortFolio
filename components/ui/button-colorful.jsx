// components/ui/button-colorful.js
"use client"
import React from 'react';
import { motion } from 'framer-motion';

export const ButtonColorful = ({ label, color }) => {
    return (
        <motion.button
            className="relative px-6 py-3 font-medium text-lg rounded-lg shadow-md overflow-hidden group"
            style={{
                backgroundColor: 'transparent',
                border: `2px solid ${color}`,
                boxShadow: `0 0 5px ${color}, 0 0 10px ${color}`,
            }}
            whileHover={{
                scale: 1.1,
                boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
            <span className="relative z-10">{label}</span>
        </motion.button>
    );
};