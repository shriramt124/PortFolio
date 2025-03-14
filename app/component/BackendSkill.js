// components/BackendSkill.js
import React from 'react';
import { ButtonColorful } from '@/components/ui/button-colorful';

const backendSkills = [
    { name: 'Node.js', color: '#68A063' },
    { name: 'Express.js', color: '#41B883' },
    { name: 'Next.js', color: 'orange' },
    { name: 'MongoDB', color: '#FFD700' },
    { name: 'MySQL', color: '#00758F' },
    { name: 'TypeScript', color: '#3178C6' },
];

function BackendSkill() {
    return (
        <div className="flex flex-col items-center justify-center bg-black text-white">
            <h1 className="text-3xl font-bold mb-8">My Backend Skills</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {backendSkills.map((skill, index) => (
                    <ButtonColorful key={index} label={skill.name} color={skill.color} />
                ))}
            </div>
        </div>
    );
}

export default BackendSkill;