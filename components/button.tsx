import React from 'react';

interface IButtonProps {
  type?: 'primary' | 'secondary';
  small?: boolean;
  children: JSX.Element | string;
  classes?: string;
  wide?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, type = 'primary', small, classes = '', wide = false }) => {
  return (
    <button
      className={`${type === 'primary' ? 'btn-primary' : 'btn-secondary'} ${small ? 'btn-small' : ''} ${
        wide ? 'w-full' : ''
      } ${classes}`}>
      {children}
    </button>
  );
};

export default Button;
