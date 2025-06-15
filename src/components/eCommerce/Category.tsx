import { Link } from "react-router-dom";
import { TCategory } from "@types";

const Category = ({ title, slug, image }: TCategory) => {
  return (
    <article className="bg-white shadow-card group">
      <Link
        to={`/categories/products/${slug}`}
        className="  flex flex-col justify-center items-center shadow-card group mb-6 "
        aria-label={`View products in category ${title}`}
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            width={144}
            height={144}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium leading-7 link-hover">{title}</h3>
        </div>
      </Link>
    </article>
  );
};

export default Category;
