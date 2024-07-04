import React from 'react';
import { FieldError } from 'react-hook-form';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  register: any;
  error?: FieldError;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, type = 'text', register, error }) => {
  return (
    <div className="flex flex-col justify-center">
      <label>{label}</label>
      <input type={type} {...register(name)} />
      {error && <p className="text-red-800 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInput;
