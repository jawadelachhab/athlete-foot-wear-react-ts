import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@utils/animations";
import { homeData } from "@data";
import { Container } from "@components/ui";

const Collections = () => {
  const { title, items } = homeData.collections;

  return (
    <Container className="my-8 md:my-16">
      <h2 className="text-3xl font-bold capitalize text-center mb-8 ">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map(({ title, image, link }, index) => (
          <motion.article
            key={index}
            className="relative"
            {...fadeUpAnimation}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Link to={link} className="overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <div className="absolute bottom-0 left-0 h-full vertical-rl px-4 py-10 rotate-180 bg-white/20">
              <Link to={link} className="link-hover">
                <h3 className="text-xl font-bold uppercase">{title}</h3>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  );
};

export default Collections;
