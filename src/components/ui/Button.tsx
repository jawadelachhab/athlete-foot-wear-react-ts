import React from "react";

type Variant = "dark" |   "primary";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  variant = "primary",
  className = "",
  children,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseStyle =
    "inline-block relative z-10 overflow-hidden px-8 py-3 border uppercase duration-300 transition-all group";

  const variantStyles = {
    primary: "border-primary text-white hover:text-primary",
    dark: "border-dark text-white hover:text-dark",
  } as const;

  const backgroundMap = {
    primary: "bg-primary",
    dark: "bg-dark",
    danger: "bg-red-600",
  } as const;

  const variantClass = variantStyles[variant];
  const backgroundClass = backgroundMap[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantClass} ${className}`}
    >
      <span
        className={`absolute left-0 top-0 w-1/2 h-full -z-10 duration-300 transition-all group-hover:w-0 ${backgroundClass}`}
      />
      {children}
      <span
        className={`absolute right-0 top-0 w-[51%] h-full -z-10 duration-300 transition-all group-hover:w-0 ${backgroundClass}`}
      />
    </button>
  );
};

export default Button;
