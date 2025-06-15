import { memo } from "react";
import { TProduct } from "@types";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";

type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = memo(
  ({
    id,
    title,
    image,
    price,
    max,
    quantity,
    changeQuantityHandler,
    removeItemHandler,
  }: CartItemProps) => {
    const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(id, quantity);
    };

    return (
      <tr className="border">
        <td className="px-6 py-3">
          <img src={image} alt={title} className="max-w-24" />
        </td>
        <td className="px-6 py-3">{title}</td>
        <td className="px-6 py-3">{price} EGP</td>
        <td className="px-6 py-3">
          <select
            name=""
            id=""
            className="px-3"
            value={quantity}
            onChange={changeQuantity}
          >
            {renderOptions}
          </select>
        </td>

        <td className="px-6 py-3">
          <button
            className="mx-auto relative text-black z-10 group duration-300 transition-all hover:text-white"
            onClick={() => removeItemHandler(id)}
          >
            <HugeiconsIcon
              icon={Cancel01Icon}
              size={24}
              color="#000000"
              strokeWidth={1.5}
            />

            <span className="w-8 h-8 rounded-full absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 bg-transparent duration-300 transition-all group-hover:bg-red"></span>
          </button>
        </td>
      </tr>
    );
  }
);

export default CartItem;
