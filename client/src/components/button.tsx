import React from "react";

export interface ButtonProps {
    primary?: boolean;
    onClick?: () => void;
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ primary, onClick, children}) => {
    
    const btnClass = primary ? 'btn-primary' : 'btn-secondary';

    return (
        <button className={btnClass}
            onClick={onClick}
        >
            { children }
        </button>
    )
}

export default Button;