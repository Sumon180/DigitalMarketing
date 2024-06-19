import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}
const Button: FC<ButtonProps> = (props) => {
  const { children, className, onClick, disabled } = props;
  const clas = cn("px-5 py-2 rounded font-medium", className);

  return (
    <button onClick={onClick} className={clas} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
