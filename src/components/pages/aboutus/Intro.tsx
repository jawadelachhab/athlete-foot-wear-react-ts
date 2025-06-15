import { Container } from "@components/ui";
import { motion } from "framer-motion";
import { fadeLeftAnimation, fadeRightAnimation } from "@utils/animations";
import { aboutUsData } from "@data";

const Intro = () => {

  const {introduction} = aboutUsData
  return (
    <Container>
      {introduction.map(({ title, content, image }, index) => {
        const isEven = index % 2 === 0;

        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 md:my-16">
           
            <motion.div
              {...(isEven ? fadeRightAnimation : fadeLeftAnimation)}
              transition={{ duration: 0.6 }}
              className={`h-80 md:h-96 self-center ${isEven ? "md:order-2" : "md:order-1"}`}
            >
              <img src={image} alt={image} className="h-full w-full object-cover" />
             
            </motion.div>

           
            <motion.article
              {...(isEven ? fadeLeftAnimation : fadeRightAnimation)}
              transition={{ duration: 0.6 }}
              className={`self-center ${isEven ? "md:order-1" : "md:order-2"}`}
            >
              <h2
                
                className="text-3xl font-bold capitalize mb-6"
              >
                {title}
              </h2>

              {content.map((item, i) => (
                <p key={i} className="mb-2">
                  {item}
                </p>
              ))}
            </motion.article>
          </div>
        );
      })}
    </Container>
  );
};

export default Intro;
