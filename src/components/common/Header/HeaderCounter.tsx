import { useEffect, useState } from "react";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

type HeaderCounterProps = {
  totalQuantity: number;
  svgIcon: IconSvgElement;
};

const HeaderCounter = ({ totalQuantity, svgIcon }: HeaderCounterProps) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const quantityAnimate = ` ${isAnimate ? "pumpCartQuantity" : ""}`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <>
      <HugeiconsIcon
        icon={svgIcon}
        size={24}
        color="#000000"
        strokeWidth={1.5}
      />

      {totalQuantity > 0 && (
        <span
          className={`absolute top-4 left-6  h-4 min-w-4 rounded-full bg-primary text-white text-[12px]  flex justify-center items-center ${quantityAnimate}`}
        >
          {totalQuantity}
        </span>
      )}
    </>
  );
};

export default HeaderCounter;
