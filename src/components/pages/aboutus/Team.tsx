import { Container } from "@components/ui";
import { motion } from "framer-motion";
import { fadeLeftAnimation } from "@utils/animations";
import { aboutUsData } from "@data";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook02Icon,
  NewTwitterIcon,
  InstagramIcon,
  MailAtSign01Icon,
} from "@hugeicons/core-free-icons";

const socialIcons = {
  facebook: Facebook02Icon,
  twitter: NewTwitterIcon,
  instagram: InstagramIcon,
  email: MailAtSign01Icon,
};

type SocialPlatform = keyof typeof socialIcons;

const Teams = () => {
  const { teams } = aboutUsData;

  return (
    <Container className="my-8 md:my-16">
      <h2
        className="text-3xl font-bold text-center capitalize mb-8"
      >
        {teams.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.members.map(({ image, name, position, socialMedia }, index) => (
          <motion.article
            key={index}
            {...fadeLeftAnimation}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group"
          >
            <div className="h-80 md:h-96 relative overflow-hidden mb-4">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
              <ul className="absolute left-1/2  -top-full -translate-x-1/2 -translate-y-1/2  z-10 group-hover:top-1/2 flex gap-2 duration-500 transition-all">
               

                {Object.entries(socialMedia).map(([platform, url]) => {
                  if (!url) return null;

                  const Icon = socialIcons[platform as SocialPlatform];

                  return (
                    <li
                      key={platform}
                      className="w-8 h-8 rounded bg-primary text-white flex justify-center items-center"
                    >
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow ${name} on ${platform}`}
                      >
                        <HugeiconsIcon
                          icon={Icon}
                          size={18}
                          color="#fff"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <span className="overlay z-0 opacity-0 group-hover:opacity-100 duration-300 transition-opacity"></span>
            </div>
            <h3 className="font-semibold mb-1 link-hover">
              {name}
            </h3>
            <p>{position}</p>
          </motion.article>
        ))}
      </div>
    </Container>
  );
};

export default Teams;
