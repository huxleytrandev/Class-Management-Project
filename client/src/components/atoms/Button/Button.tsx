import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

import { cn } from '@/helpers/helpers';

interface ButtonProps extends AntButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <AntButton className={cn('font-display rounded-full', className)} {...props}>
    {children}
  </AntButton>
);

export default Button;
