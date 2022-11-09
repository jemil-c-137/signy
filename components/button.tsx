import React from 'react';

interface IButtonProps {
  type?: 'primary' | 'secondary';
  small?: boolean;
  children: JSX.Element | string;
}

const Button: React.FC<IButtonProps> = ({ children, type = 'primary', small }) => {
  return (
    <button className={`${type === 'primary' ? 'btn-primary' : 'btn-secondary'} ${small ? 'btn-small' : ''}`}>
      {children}
    </button>
  );
};

export default Button;
