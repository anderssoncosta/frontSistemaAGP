/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister, RegisterOptions } from "react-hook-form";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  error?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
}

const Input = ({
  placeholder,
  type,
  name,
  register,
  rules,
  error,
}: InputProps) => {
  return (
    <div>
      <input
        className="w-full border rounded-lg border-blue-500 bg-transparent p-2 focus:border-blue-500 focus:outline-none"
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
export default Input;
