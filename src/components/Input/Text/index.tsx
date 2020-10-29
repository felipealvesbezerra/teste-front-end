import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { InputProps } from '..';
import { Container, ErrorTooltip } from './styles';

const InputText: React.FC<InputProps> = ({
  name,
  type,
  error,
  value,
  touched,
  icon: Icon,
  ...rest
}) => {
  const [focused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container
      isErrored={!!error && touched}
      isFocused={focused}
      isFilled={isFilled}
    >
      {!!Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        name={name}
        type={type}
        value={value}
        onFocus={handleFocus}
        onBlurCapture={handleBlur}
        {...rest}
      />
      {error && touched && (
        <ErrorTooltip title={error}>
          <FiAlertCircle size={20} />
        </ErrorTooltip>
      )}
    </Container>
  );
};

export default InputText;
