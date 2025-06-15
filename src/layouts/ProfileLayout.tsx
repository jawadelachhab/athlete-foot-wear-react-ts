import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Container } from "@components/ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DashboardBrowsingIcon,
  ShoppingCart01Icon,
  UserIcon,
  Logout03Icon,
} from "@hugeicons/core-free-icons";

const ProfileLayout = () => {
  const location = useLocation();

  const navItems = [
    {
      icon: (
        <HugeiconsIcon
          icon={DashboardBrowsingIcon}
          size={18}
          className="inline-block mr-2"
        />
      ),
      text: "dashboard",
      link: "/profile/dashboard",
    },
    {
      icon: (
        <HugeiconsIcon
          icon={ShoppingCart01Icon}
          size={18}
          className="inline-block mr-2"
        />
      ),
      text: "orders",
      link: "/profile/orders",
    },
    {
      icon: (
        <HugeiconsIcon
          icon={UserIcon}
          size={18}
          className="inline-block mr-2"
        />
      ),
      text: "Account details",
      link: "/profile",
    },
    {
      icon: (
        <HugeiconsIcon
          icon={Logout03Icon}
          size={18}
          className="inline-block mr-2"
        />
      ),
      text: "Logout",
      link: "Logout",
    },
  ];

  const getPageTitle = () => {
    const currentNavItem = navItems.find((item) =>
      location.pathname.includes(item.link)
    );
    return currentNavItem ? currentNavItem.text : "Profile"; // Fallback to "Profile" if no match
  };

  return (
    <Container className="grid grid-cols-12 gap-6 my-16">
      <div className="col-span-3">
        <ul>
          {navItems.map(({ icon, text, link }, index) => (
            <li key={index}>
              <NavLink
                to={link}
                //className={`block border p-2 mb-2 bg-primary text-white`}
                className={({ isActive }) =>
                  `block border p-2 mb-2 capitalize ${
                    isActive ? "bg-primary text-white" : "bg-white"
                  } `
                }
                end
              >
                {icon}
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-9 border">
        <div className="border-b p-3">
          <h2 className="text-xl font-semibold capitalize">{getPageTitle()}</h2>
        </div>
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default ProfileLayout;
