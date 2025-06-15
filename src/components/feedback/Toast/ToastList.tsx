import { useAppSelector } from "@store/hooks";
import { motion, AnimatePresence } from "framer-motion";
import ToastItem from "./ToastItem";

const ToastList = () => {
  const { records } = useAppSelector((state) => state.toasts);

  return (
    <div className="fixed right-0 bottom-12 w-[400px]">
      <AnimatePresence>
        {records.map((record) => (
          <motion.div
            key={record.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            <ToastItem
              id={record.id}
              title={record.title}
              type={record.type}
              message={record.message}
              delayAnimation={record.delayAnimation}
              onCloseToast={record.onCloseToast}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastList;
