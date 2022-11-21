import React from 'react';

interface IButtonProps {
  type?: 'primary' | 'secondary';
  small?: boolean;
  children: JSX.Element | string;
  classes?: string;
}

const Button: React.FC<IButtonProps> = ({ children, type = 'primary', small, classes = '' }) => {
  return (
    <button
      className={`${type === 'primary' ? 'btn-primary' : 'btn-secondary'} ${small ? 'btn-small' : ''} ${classes}`}>
      {children}
    </button>
  );
};

export default Button;
