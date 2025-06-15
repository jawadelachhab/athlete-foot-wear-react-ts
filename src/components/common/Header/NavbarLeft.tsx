import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import { Link } from "react-router-dom";
import HeaderCounter from "./HeaderCounter";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FavouriteIcon,
  ShoppingCart01Icon,
  Search01Icon,
  User02Icon
} from "@hugeicons/core-free-icons";

const NavbarLeft = () => {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <ul className="flex">
      <li>
        <button className="px-2 py-4">
         

          <HugeiconsIcon
            icon={Search01Icon}
            size={24}
            color="#000000"
            strokeWidth={1.5}
          />
        </button>
      </li>

      <li>
        <Link
          to="/wishlist"
          className="block px-2 py-4 relative link-hover"
          aria-label="Go to wishlist"
        >
          <HeaderCounter
            totalQuantity={wishlistTotalQuantity}
            svgIcon={FavouriteIcon}
          />
        </Link>
      </li>
      <li>
        <Link
          to="/cart"
          className="block px-2 py-4 relative link-hover"
          aria-label="Go to shopping cart"
        >
          <HeaderCounter
            totalQuantity={cartTotalQuantity}
            svgIcon={ShoppingCart01Icon}
          />
        </Link>
      </li>
       <li>
        <Link
          to="/cart"
          className="block px-2 py-4 relative link-hover"
          aria-label="Go to shopping cart"
        >
         <HugeiconsIcon
            icon={User02Icon}
            size={24}
            color="#000000"
            strokeWidth={1.5}
          />
        </Link>
      </li>
    </ul>
  );
};

export default NavbarLeft;
