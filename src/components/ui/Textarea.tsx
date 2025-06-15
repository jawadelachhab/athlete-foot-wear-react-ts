import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type TextareaProps<TFieldValue extends FieldValues> = {
  placeholder: string;
  name: Path<TFieldValue>;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  status?: string;
  success?: string;
  disabled?: boolean;
};

const Textarea = <TFieldValue extends FieldValues>({
  placeholder,
  name,
  register,
  error,
  onBlur,
  status,
  success,
  disabled,
}: TextareaProps<TFieldValue>) => {
  const onblurHandler = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };
  return (
    <div className="mb-4">
      <textarea
        rows={4}
        cols={4}
        {...register(name)}
        onBlur={onblurHandler}
        placeholder={placeholder}
        className={`w-full py-2 px-4 border border-gray-500/2 rounded  
            ${error ? "border-red" : ""}
             ${success ? "border-green-800" : ""} 
              mb-2`}
        disabled={disabled}
      ></textarea>

      {error && <span className="block text-red text-sm">{error}</span>}
      {success && (
        <span className="block text-green-800 text-sm">{success}</span>
      )}
      {status && <span className="block text-gray-500 text-sm">{status}</span>}
    </div>
  );
};

export default Textarea;
