import React, { ReactNode } from "react";

interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    className?: string;
    ariaLabel?: string;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = "primary",
    className,
    ariaLabel,
    type = "button",
}) => {
    const hasText = typeof children === "string" && children.trim() !== "";
    const finalAriaLabel = !hasText && ariaLabel ? ariaLabel : undefined;
    const baseClasses =
        "inline-flex items-center justify-center rounded px-4 py-4 font-medium transition-all";
    const variantClasses =
        variant === "primary"
            ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses} ${className || ""}`}
            aria-label={finalAriaLabel}
        >
            {children}
        </button>
    );
};

export default Button;
