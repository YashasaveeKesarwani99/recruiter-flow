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
    'btn-secondary';

    return (
        <button className={`${btnClass} ${className}`}
            onClick={onClick}
        >
            { children }
        </button>
    )
}

export default Button;