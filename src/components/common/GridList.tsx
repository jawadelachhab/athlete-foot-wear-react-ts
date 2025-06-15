import { LottieHandler } from "@components/feedback";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@utils/animations";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => JSX.Element;
  className?:string,
  emptyMessage: string;
 
};

const GridList = <T extends { id?: number }>({
  emptyMessage,
  records,
  renderItem,
  className,
}: GridListProps<T>) => {
  

  const renderList =
    records.length > 0 ? (
      <div className={`grid ${className} gap-8`}>
        {records.map((record, index) => (
          <motion.div
            key={record.id}
            {...fadeUpAnimation}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {renderItem(record)}
          </motion.div>
        ))}
      </div>
    ) : (
      <LottieHandler type="empty" message={emptyMessage} />
    );
  return <>{renderList}</>;
};

export default GridList;
