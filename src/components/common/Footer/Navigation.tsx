import { Link } from "react-router-dom";
import { footerData } from "@data";

const Navigation = () => {
  const { navigation } = footerData;

  return (
    <>
      {navigation.map(({ title, links }, index) => (
        <div key={index} className=" md:col-span-2">
          <h6 className="text-lg font-bold capitalize mb-5">{title}</h6>
          <ul>
            {links.map(({ text, link }, ii) => (
              <li key={ii} className="pb-3">
                <Link to={link} className="text-sm link-hover">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Navigation;
