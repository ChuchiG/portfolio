import React from 'react';

const SkillBar = ({ level }) => {
    // Determinamos el color: Azul si es 5, Verde si es menor a 5
    const activeColor = level === 5 ? 'bg-blue-600' : 'bg-green-500';

    return (
        <div className="flex space-x-[3px] ml-auto">
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    className={`h-6 w-2 transform -skew-x-12 transition-colors duration-300 ${
                        index < level ? activeColor : 'bg-gray-300'
                    }`}
                />
            ))}
        </div>
    );
};

export default SkillBar;
