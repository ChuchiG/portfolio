import React from 'react';

const LinkButton = ({ href, disabled, icon: Icon, text, variant = 'primary' }) => {
    const baseClasses = "flex items-center justify-center w-full px-4 py-3 rounded-lg transition shadow-md group font-medium";
    
    const variants = {
        primary: "bg-gray-900 text-white hover:bg-gray-800",
        blue: "bg-blue-600 text-white hover:bg-blue-700",
        red: "bg-red-600 text-white hover:bg-red-700",
        disabled: "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300 shadow-none"
    };

    const className = `${baseClasses} ${variants[disabled ? 'disabled' : variant]}`;

    if (disabled) {
        return (
            <button disabled className={className}>
                {Icon && <Icon className="w-5 h-5 mr-2 opacity-50" />}
                {text}
            </button>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {Icon && <Icon className={`w-5 h-5 mr-2 ${variant === 'red' ? 'fill-current' : ''}`} />}
            {text}
        </a>
    );
};

export default LinkButton;
