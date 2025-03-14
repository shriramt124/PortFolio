'use client';

import { motion } from 'framer-motion';

const AchievementsList = () => {
    // Animation variants for container and items
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="relative">
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4 leading-relaxed">
                Solved 750+ problems across all difficulty levels. Ranked in the top 2% globally.
            </p>

            <motion.ul
                className="flex flex-col gap-3 mt-4 pl-1"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {[
                    "👨‍💻 Competitive Programming: Active participant in platforms like LeetCode, Codeforces,Codechef solving complex algorithmic challenges.",
                    "Completed Dynamic Programming series",
                    "📈 Constant Growth: Continuously pushing limits by participating in coding competitions hosted by Google, Microsoft, and other top tech companies.",
                    "1550+ rating on codechef",
                    "🚀 Codeforces Div3 Contest: Solved 5 out of 7 questions, achieving a rank of 3200."
                ].map((achievement, index) => (
                    <motion.li
                        key={index}
                        variants={item}
                        className="flex items-start gap-3 group"
                    >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mt-1.5 group-hover:scale-125 transition-transform duration-300"></span>
                        <span className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                            {achievement}
                        </span>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Subtle glow effect in the background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur-xl opacity-30 -z-10"></div>
        </div>
    );
};

export default AchievementsList;