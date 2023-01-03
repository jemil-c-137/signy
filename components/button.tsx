import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps {
  style?: 'primary' | 'secondary';
  small?: boolean;
  children: JSX.Element | string;
  classes?: string;
  wide?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  style = 'primary',
  small,
  classes = '',
  wide = false,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${style === 'primary' ? 'btn-primary' : 'btn-secondary'} ${small ? 'btn-small' : ''} ${
        wide ? 'w-full' : ''
      } ${classes}`}>
      {children}
    </button>
  );
};

export default Button;
