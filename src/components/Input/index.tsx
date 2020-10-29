import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import InputText from './Text';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  icon?: React.ComponentType<IconBaseProps>;
  error?: string;
  touched: boolean;
}

const Input: React.FC<InputProps> = ({ name, type, ...rest }) => {
  return <InputText name={name} type={type} {...rest} />;
};

export default Input;
