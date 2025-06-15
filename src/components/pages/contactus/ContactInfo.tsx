import { Container } from "@components/ui";
import { motion } from "framer-motion";
import { fadeLeftAnimation } from "@utils/animations";
import { HugeiconsIcon } from "@hugeicons/react";
import { contactUsData } from "@data";
import {
  SmartPhone01Icon,
  Mail01Icon,
  Location03Icon,
} from "@hugeicons/core-free-icons";

const icons = [Location03Icon, Mail01Icon, SmartPhone01Icon];

const infoItems = contactUsData.infos.map((item, i) => ({
  ...item,
  icon: icons[i],
}));

const ContactInfo = () => {
  return (
    <Container
      as="section"
      className="grid grid-cols-1 md:grid-cols-3 gap-8  my-8 md:my-16"
      aria-labelledby="contact-info-heading"
    >
      <h2 id="contact-info-heading" className="sr-only hidden">
        Contact Information
      </h2>
      {infoItems.map(({ label, value, link, icon }, index) => (
        <motion.article
          key={`${label}-${index}`}
          {...fadeLeftAnimation}
          transition={{ duration: 0.25, delay: 0.1 * (index + 1) }}
          className="flex flex-col justify-center items-center bg-white shadow-card p-4 h-52 group text-center"
        >
          <div className="w-20 h-20 rounded-full flex justify-center items-center text-primary border border-primary mb-4 relative z-10 transition-all group-hover:text-white">
            <span className="absolute inset-0 bg-primary rounded-full -z-10 scale-0 group-hover:scale-100 transition-transform duration-300" />
            <HugeiconsIcon
              icon={icon}
              size={30}
              strokeWidth={1.5}
              color="currentColor"
              aria-hidden="true"
            />
          </div>

          <h4 className="font-semibold mb-2">{label}</h4>

          {link ? (
            <a href={link} className="text-secondary link-hover break-words">
              {value}
            </a>
          ) : (
            <p className="break-words">{value}</p>
          )}
        </motion.article>
      ))}
    </Container>
  );
};

export default ContactInfo;
