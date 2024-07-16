import React from "react";

export interface ButtonProps {
    primary?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ primary, onClick, children, className}) => {
    
    const btnClass = primary ? 
    'p-6 bg-primary-grey text-white rounded-full shadow-lg transition-transform transform hover:scale-150' : 
    'transition duration-300 ease-in-out hover:bg-yellow-500 w-24 h-8 rounded-lg flex justify-center items-center bg-primary-yellow p-6 text-primary-background text-bold';

    return (
        <button className={`${btnClass} ${className}`}
            onClick={onClick}
        >
            { children }
        </button>
    )
}

export default Button;