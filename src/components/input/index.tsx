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
        className="w-full border-b border-violet-700 bg-transparent text-lg p-2 focus:border-violet-700 focus:outline-none"
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="my-1 text-red-500">{error}</p>}
    </div>
  );
};
export default Input;
