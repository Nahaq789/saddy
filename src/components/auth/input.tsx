import React, { ChangeEvent, useState } from "react";
import "../../styles/globals.css";

interface AuthInputProps {
  className: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  isPassword: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({
  className,
  type,
  placeholder,
  onChange,
  isPassword = false,
  errorText = "",
}) => {
  const [isFocused, setIsForcused] = useState(false);

  const handleFocus = (): void => setIsForcused(true);
  const handleBlur = (): void => setIsForcused(false);

  const hasError = errorText !== "";

  return (
    <div>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default AuthInput;
