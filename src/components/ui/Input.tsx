import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps<TFieldValue extends FieldValues> = {
  placeholder: string;
  name: Path<TFieldValue>;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  status?: string;
  success?: string;
  disabled?: boolean;
};

const Input = <TFieldValue extends FieldValues>({
  placeholder,
  name,
  type = "text",
  register,
  error,
  onBlur,
  status,
  success,
  disabled,
}: InputProps<TFieldValue>) => {
  const onblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };
  return (
    <div className="mb-3">
      <input
        {...register(name)}
        type={type}
        onBlur={onblurHandler}
        placeholder={placeholder}
        className={`w-full py-2 px-4 border border-gray-500/2   
            ${error ? "border-red" : ""}
             ${success ? "border-green-800" : ""} 
              mb-2`}
        disabled={disabled}
      />
      {error && <span className="block text-red text-sm">{error}</span>}
      {success && (
        <span className="block text-green-800 text-sm">{success}</span>
      )}
      {status && <span className="block text-gray-500 text-sm">{status}</span>}
    </div>
  );
};

export default Input;
