"use client";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  placeholder: string;
  disabled?: string;
  type: string;
  required: boolean;
  register: UseFormRegister<FieldValues>;
}

const Input: React.FC<InputProps> = () => {
  return <div>Input</div>;
};

export default Input;
