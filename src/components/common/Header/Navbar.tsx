import { Link } from "react-router-dom";
import NavbarLeft from "./NavbarLeft";
import { Container } from "@components/ui";
import { headerData } from "@data";

const NavItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About Us",
    link: "/about-us",
  },
  {
    text: "Categories",
    link: "/categories",
  },
  {
    text: "Contact Us",
    link: "/contact-us",
  },
];

const Navbar = () => {
  const { logo } = headerData;
  return (
    <Container>
      <nav className="flex" role="navigation" aria-label="Main navigation">
        <Link to="/" className="py-4" aria-label="Go to homepage">
          <img src={logo.source} alt={logo.alternative} />
        </Link>

        <div className="flex items-center flex-grow basis-auto justify-end ">
          <ul className="flex">
            {NavItems.map(({ text, link }, index) => (
              <li key={index}>
                <Link
                  to={link}
                  className="block   px-3 py-4 text-sm uppercase font-medium duration-300 transition-colors hover:text-primary
                  "
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <NavbarLeft />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
