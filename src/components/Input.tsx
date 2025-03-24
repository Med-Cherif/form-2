import React from "react";
import FormGroup from "./FormGroup";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

// Consider it as Controlled Third Party Library

interface InputProps {
  onChange: (value: string) => void;
  value: string;
  isInvalid?: boolean;
  errorMessage?: string;
  label: string;
  name: string;
}

const Input = ({
  onChange,
  value,
  errorMessage,
  isInvalid,
  label,
  name,
}: InputProps) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <input
        className="form-control"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {isInvalid ? <ErrorMessage message={errorMessage} /> : null}
    </FormGroup>
  );
};

export default Input;
