// components/OtherSkill.js
import React from 'react';
import { ButtonColorful } from '@/components/ui/button-colorful';

const otherSkills = [
    { name: 'Linux', color: '#FF4500' },
    { name: 'Docker', color: '#0DB7ED' },
    { name: 'Git', color: '#F05032' },
    { name: 'GitHub', color: '#6CC644' },
    { name: 'VSCode', color: '#007ACC' },
];

function OtherSkill() {
    return (
        <div className="flex flex-col items-center justify-center bg-black text-white">
            <h1 className="text-3xl font-bold mb-8">My Other Skills</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {otherSkills.map((skill, index) => (
                    <ButtonColorful key={index} label={skill.name} color={skill.color} />
                ))}
            </div>
        </div>
    );
}

export default OtherSkill;