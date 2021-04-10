import React from 'react';
import styled from 'styled-components';
import { color } from '@edma/design-tokens';

interface ButtonProps {
  type?: 'button' | 'submit' | undefined;
  variant?: 'filled' | 'outlined' | 'link' | undefined;
  color?: 'primary' | 'secondary' | undefined;
  size?: 'small' | 'medium' | 'large' | undefined;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: any;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'filled',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  className,
  disabled = false,
  onClick,
  children
}: ButtonProps) => {

  return (
    <StyledButton
      variant={variant ? variant : undefined}
      type={type ? type : undefined}
      color={color ? color : undefined}
      size={size ? size : undefined}
      className={className ? className : undefined}
      disabled={disabled ? disabled : undefined}
      onClick={onClick ? onClick : undefined}
      fullWidth={fullWidth ? fullWidth : undefined}
    >
      {children}
    </StyledButton>
  )
};

const StyledButton = styled('button')<ButtonProps>`
  display: inline-block;
  align-self: flex-start;
  border-radius: 44px;
  width: ${(props) => props.fullWidth ? '100%' : 'auto'};
  ${props => {
    switch (props.variant) {
      case 'filled':
        switch (props.color) {
          case 'primary':
            return `
              border: 0;
              color: ${color.white};
              background-color: ${color.b500};
            `;
          case 'secondary':
            return `
              border: 0;
              color: ${color.white};
              background-color: ${color.v800};
            `;
        };
      break;
      case 'outlined':
        switch (props.color) {
          case 'primary':
            return `
              border: 2px solid;
              color: ${color.b500};
              background-color: transparent;
              border-color: ${color.b500}
            `;
          case 'secondary':
            return `
              border: 2px solid;
              color: ${color.v800};
              background-color: transparent;
              border-color: ${color.v800}
            `;
        };
    }
  }};
  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          padding: 8px 16px;
        `;
      case 'medium':
        return `
          padding: 12px 24px;
        `;
      case 'large':
        return `
          padding: 24px 32px;
        `;
    }
  }};
  ${(props) => {
    switch (props.disabled) {
      case true:
        return `
          color: ${color.g400};
          background-color: ${color.g300};
        `;
    }
  }}
`;

export default Button;
