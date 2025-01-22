import React, { ReactNode, FC } from "react";

type ButtonProps = {
  onClick: () => void; 
  children?: ReactNode; 
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string; 
  isActive?: boolean;
};

const Button: FC<ButtonProps> = ({ 
  onClick, 
  children, 
  icon: Icon, 
  className = "", 
  isActive = false 
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center p-2 rounded-lg text-[16px] ${
        isActive ? "bg-indigo-900 text-white" : "hover:bg-indigo-900 hover:text-white"
      } ${className}`}
    >
      {Icon && <Icon className="text-current" />}
      {children && <h1>{children}</h1>}
    </button>
  );
};

export default Button;
