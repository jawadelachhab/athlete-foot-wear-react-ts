import { Container } from "@components/ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WebDesign01Icon,
  AiInnovation01Icon,
  CamperIcon,
} from "@hugeicons/core-free-icons";
import { aboutUsData } from "@data";
import { motion } from "framer-motion";
import { fadeLeftAnimation } from "@utils/animations";

const Stages = () => {
  const icons = [WebDesign01Icon, AiInnovation01Icon, CamperIcon];

  const stagesItems = aboutUsData.stages.map((item, i) => ({
    ...item,
    icon: icons[i],
  }));

  return (
    <section className="py-16 bg-[url('/images/about/img-3.jpg')] bg-center bg-cover">
      <Container className="grid grid-cols-1  md:grid-cols-3 gap-16">
        {stagesItems.map(({ icon, title, content }, index) => (
          <motion.article
            key={index}
            className="text-white  text-center"
            {...fadeLeftAnimation}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <HugeiconsIcon
              icon={icon}
              size={60}
              color="#fffff"
                strokeWidth={1}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white text-sm">{content}</p>
          </motion.article>
        ))}
      </Container>
    </section>
  );
};

export default Stages;
