import Lottie from "lottie-react";
import notFound from "@assets/lottieFiles/notFound.json";
import empty from "@assets/lottieFiles/empty.json";
import loading from "@assets/lottieFiles/loading.json";
import error from "@assets/lottieFiles/error.json";
import success from "@assets/lottieFiles/success.json";

const lottieFilesMap = {
  notFound,
  empty,
  loading,
  error,
  success,
};

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  className?: string;
};

const LottieHandler = ({ type, message, className }: LottieHandlerProps) => {
  const lottie = lottieFilesMap[type];

  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <Lottie animationData={lottie} className="w-[250px] mb-4" />
      {message && (
        <h3 className={` ${type === "error" ? "text-red" : ""}`}>{message}</h3>
      )}
    </div>
  );
};

export default LottieHandler;
