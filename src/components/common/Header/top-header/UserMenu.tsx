import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authLogout } from "@store/auth/authSlice";
import { actGetWishlist } from "@store/wishlist/wishlistSlice";
import { Link } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";
import { User02Icon , ArrowDown01Icon } from "@hugeicons/core-free-icons";

const UserMenu = () => {
  const dispatch = useAppDispatch();

  const { accessToken, user } = useAppSelector((state) => state.auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle the dropdown visibility
  };

  return (
    <ul className="flex items-center justify-end">
      {!accessToken ? (
        <li>
          <Link
            to="/login"
            className="flex items-center px-2 py-4 text-sm font-medium duration-300 transition-colors hover:text-primary"
          >
            <HugeiconsIcon icon={User02Icon } size={20} className="mr-1" />
            Login
          </Link>
        </li>
      ) : (
        <li className="relative">
          <div className="flex items-center px-2 py-4 text-sm font-medium cursor-pointer" onClick={toggleDropdown} aria-label="User menu" aria-expanded={isDropdownOpen ? "true" : "false"}>
            <HugeiconsIcon icon={User02Icon } size={18} color="#000000" strokeWidth={1.5} />
            {user?.name}
            <HugeiconsIcon icon={ArrowDown01Icon} size={17} color="#000000" strokeWidth={1.5} className={`ml-1 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </div>
          {isDropdownOpen && (
            <div className="absolute start-1/2 -translate-x-1/2 min-w-24 bg-white shadow z-20 text-center opacity-100 visible duration-300 transition-opacity">
              <Link to="/profile" className="block px-4 py-2 text-sm duration-300 transition-colors hover:text-primary">
                Profile
              </Link>
              <Link to="/orders" className="inline-block px-4 py-2 text-sm duration-300 transition-colors hover:text-primary">
                Orders
              </Link>
              <Link
                to="/"
                className="inline-block px-4 py-2 text-sm duration-300 transition-colors hover:text-primary"
                onClick={() => dispatch(authLogout())}
              >
                Logout
              </Link>
            </div>
          )}
        </li>
      )}

      
    </ul>
  );
};

export default UserMenu;
