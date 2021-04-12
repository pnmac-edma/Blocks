import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color } from '@edma/design-tokens';
import { useMouseData } from '../CustomHooks/useMouseData';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'filled' | 'outlined' | 'link' | undefined;
  color?: 'primary' | 'secondary' | undefined;
  size?: 'small' | 'medium' | 'large' | undefined;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: any;
  ariaLabel?: string;
  mouseEnter?: string;
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
  ariaLabel,
  children
}: ButtonProps) => {
  const mouseData = useMouseData();
  const position = mouseData.position;

  const [mouseEnter, setmouseEnter] = useState('');

  useEffect(() => {
    setmouseEnter(mouseEnter);
  }, [mouseEnter]);

  const handleHover = (position: any, e: any) => {
    if (e) {
      const bounding = e.getBoundingClientRect(),

        left = bounding.left,
        top = bounding.top,
        right = bounding.right,
        bottom = bounding.bottom,

        x = position.clientX,
        y = position.clientY,

        // Calculate mouse distance from each side
        leftDist = Math.abs(left - x),
        topDist = Math.abs(top - y),
        rightDist = Math.abs(right - x),
        bottomDist = Math.abs(bottom - y),

        min = Math.min(leftDist, topDist, rightDist, bottomDist);

      // Return closest side
      switch (min) {
        case leftDist:
          setmouseEnter('left');
          console.log('left');
        break;
        case topDist:
          setmouseEnter('top');
          console.log('top');
        break;
        case rightDist:
          setmouseEnter('right');
          console.log('right');
        break;
        case bottomDist:
          setmouseEnter('bottom');
          console.log('bottom');
      }

      return mouseEnter;
    }
  }

  return (
    <StyledButton
      variant={variant ? variant : undefined}
      color={color ? color : undefined}
      type={type ? type : undefined}
      aria-label={ariaLabel ? ariaLabel : children}
      size={size ? size : undefined}
      className={className ? className : undefined}
      disabled={disabled ? disabled : undefined}
      onClick={onClick ? onClick : undefined}
      fullWidth={fullWidth ? fullWidth : undefined}
      onMouseEnter={(e) => handleHover(position, e.target)}
      onMouseLeave={(e) => handleHover(position, e.target)}
      mouseEnter={mouseEnter}
    >
      <span>{children}</span>
    </StyledButton>
  )
};

const StyledButton = styled('button')<ButtonProps>`
  align-self: flex-start;
  border-radius: 60px;
  width: ${(props) => props.fullWidth ? '100%' : 'auto'};
  cursor: pointer;
  overflow: hidden;

  ${props => {
    switch (props.variant) {
      case 'filled':
        switch (props.color) {
          case 'primary':
            return `
              position: relative;
              display: inline-block;
              border: 0;
              color: ${color.white};
              background-color: ${color.b500};

              & span {
                position: relative;
                z-index: 2;
              }

              &:after {
                content: '';
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                position: absolute;
                background-color: ${color.v800};
                transition: all .4s cubic-bezier(.96,0,.15,1);
                transform: translate3d(0, -100%, 0);
              }

              ${props.mouseEnter === 'top' ? `
                &:after {
                  border-radius: 25px;
                  transform: translate3d(0, -100%, 0);
                }

                &:hover:after {
                  border-radius: 15px;
                  transform: translate3d(0, 0, 0);
                }
              `
              : props.mouseEnter === 'left' ? `
                &:after {
                  border-radius: 25px;
                  transform: translate3d(-100%, 0, 0);
                }

                &:hover:after {
                  border-radius: 15px;
                  transform: translate3d(0, 0, 0);
                }
              `
              : props.mouseEnter === 'bottom' ? `
                &:after {
                  border-radius: 25px;
                  transform: translate3d(0, 100%, 0);
                }

                &:hover:after {
                  border-radius: 15px;
                  transform: translate3d(0, 0, 0);
                }
              `
              : props.mouseEnter === 'right' ? `
                &:after {
                  border-radius: 25px;
                  transform: translate3d(100%, 0, 0);
                }

                &:hover:after {
                  border-radius: 15px;
                  transform: translate3d(0, 0, 0);
                }
              `
              : ''
              }
            `;
          case 'secondary':
            return `
              display: inline-block;
              border: 0;
              color: ${color.white};
              background-color: ${color.v800};

              &:hover {
                background-color: ${color.v900};
              }
            `;
        };
      break;
      case 'outlined':
        switch (props.color) {
          case 'primary':
            return `
              display: inline-block;
              border: 2px solid;
              color: ${color.b500};
              background-color: transparent;
              border-color: ${color.b500}
            `;
          case 'secondary':
            return `
              display: inline-block;
              border: 2px solid;
              color: ${color.v800};
              background-color: transparent;
              border-color: ${color.v800}
            `;
        };
      break;
      case 'link':
        switch (props.color) {
          case 'primary':
            return `
              display: contents;
              border: 0;
              color: ${color.b500};
              background-color: transparent;
            `;
          case 'secondary':
            return `
              display: contents;
              border: 0;
              color: ${color.v800};
              background-color: transparent;
            `;
        }
    }
  }};
  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case 'medium':
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
      case 'large':
        return `
          padding: 16px 32px;
          font-size: 18px;
        `;
    }
  }};
  ${(props) => {
    switch (props.disabled) {
      case true:
        return `
          color: ${color.g400};
          background-color: ${color.g300};
          cursor: not-allowed;
        `;
    }
  }}
`;

export default Button;
