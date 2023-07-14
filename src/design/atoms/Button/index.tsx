import React from "react";
import StyledButton from "./styled";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Button disabled
   */
  disabled?: boolean;
  /**
   * Button variants
   */
  variant?: "primary" | "secondary" | "outline";
}

/**
 * Reusable Button component
 * @returns {React.FC<ButtonProps>}
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton disabled={disabled} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
