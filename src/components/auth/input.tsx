import TextField from "@mui/material/TextField";
import React, { ChangeEvent, useState } from "react"
import "../../styles/globals.css";

interface AuthInputProps {
  className: string,
  type: string,
  label: string,
  placeholder: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  errorText?: string,
  isPassword: boolean,
}

const AuthInput: React.FC<AuthInputProps> = ({
  className,
  type,
  label,
  placeholder,
  value,
  onChange,
  isPassword = false,
  errorText = '',
}) => {
  const [isFocused, setIsForcused] = useState(false);

  const handleFocus = (): void => setIsForcused(true);
  const handleBlur = (): void => setIsForcused(false);

  const hasError = errorText !== '';

  return (
    <div>
      <TextField
        id="outlined-helperText"
        className={className}
        label={label}
        helperText={errorText}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        error={hasError}
      />
    </div>
  )

}

export default AuthInput
