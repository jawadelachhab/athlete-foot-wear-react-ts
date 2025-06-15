import { NavLink } from "react-router-dom";
import { Container } from "@components/ui";

type BreadcrumbProps = {
  title: string;
  items?: { title: string; link?: string }[];
};
const Breadcrumb = ({ title, items }: BreadcrumbProps) => {
  return (
    <section className=" h-60  bg-[url('/images/bg-breadcrumb.webp')] bg-center bg-cover">
      <Container
        as="div"
        className="h-full flex flex-col justify-center items-center  text-white"
      >
        <h1 className="text-4xl font-bold text-center  capitalize  leading-normal mb-2">
          {title}
        </h1>

        <nav
          aria-label="Breadcrumb"
          className="flex justify-center md:justify-end items-center"
        >
          <ol className="flex justify-center items-center md:ml-auto">
            <li>
              <NavLink
                to="/"
                className="pr-6 link-transition after:content-['>'] after:absolute after:top-0 after:right-2"
              >
                Home
              </NavLink>
            </li>

            {items ? (
              items.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <NavLink
                      to={item.link}
                      className="pr-6 link-transition after:content-['>'] after:absolute after:top-0 after:right-2"
                    >
                      {item.title}
                    </NavLink>
                  ) : (
                    <span> {item.title}</span>
                  )}
                </li>
              ))
            ) : (
              <span> {title}</span>
            )}
          </ol>
        </nav>
      </Container>
    </section>
  );
};

export default Breadcrumb;
