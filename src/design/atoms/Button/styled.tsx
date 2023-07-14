// TODO: Integrate with theme

import styled, { css } from "styled-components";
import { ButtonProps } from ".";
const primaryStyles = css`
  background-color: #007bff;
  border: 1px solid #007bff;
  color: #fff;

  &:hover {
    background-color: #0054B3;
  }

  &:disabled {
    background-color: #007bff;
  }
`;

const secondaryStyles = css`
  background-color: #6c757d;
  border: 1px solid #6c757d;
  color: #fff;

  &:hover {
    background-color: #5a6268;
  }

  &:disabled {
    background-color: #6c757d;
  }
`;

const outlineStyles = css`
  background-color: transparent;
  color: #007bff;
  border: 1px solid #007bff;
  transition: color 0.1s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }

  &:disabled {
    background-color: transparent;
    color: #007bff;
  }
`;

/**
 * This is a test
 */
const disabledStyles = css`
  opacity: 0.65;
  cursor: not-allowed;
  transition: none;
`;

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }

  ${(props) => props.variant === "primary" && primaryStyles}
  ${(props) => props.variant === "secondary" && secondaryStyles}
  ${(props) => props.variant === "outline" && outlineStyles}
  ${(props) => props.disabled && disabledStyles}
`;

export default StyledButton;
