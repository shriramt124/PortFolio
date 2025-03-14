import React from 'react';

function ProjectTechStacks({ stacks }) {
    // Function to generate a random color in hex format
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className="flex flex-wrap gap-2">
            {stacks.map((stack, index) => {
                const randomColor = getRandomColor(); // Generate a random color for each button

                return (
                    <button
                        key={index}
                        style={{ borderColor: randomColor }} // Apply the random color to the border
                        className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg border-2 hover:bg-opacity-80 focus:outline-none transition-all duration-300"
                    >
                        {stack}
                    </button>
                );
            })}
        </div>
    );
}

export default ProjectTechStacks;