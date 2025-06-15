type AlertProps = {
  variant?: "success" | "danger";
  title: string;
};

const Alert = ({ variant = "success", title }: AlertProps) => {
  const variants = {
    success: "bg-green-500",
    danger: "bg-primary",
  };

  return (
    <div className={` ${variants[variant]} text-white rounded p-4 `}>
      {title && <div className="text-xl font-semibold mb-2">{title}</div>}
    </div>
  );
};

export default Alert;
