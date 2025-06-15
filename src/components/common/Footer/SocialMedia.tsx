import { footerData } from "@data";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook02Icon,
  NewTwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  MailAtSign01Icon,
} from "@hugeicons/core-free-icons";

const SocialMedia = () => {
  const {
    socialMedia: { facebook, twitter, instagram, youtube, email },
  } = footerData;

  const links = [
    { href: facebook, icon: Facebook02Icon },
    { href: twitter, icon: NewTwitterIcon },
    { href: instagram, icon: InstagramIcon },
    { href: youtube, icon: YoutubeIcon },
    { href: email, icon: MailAtSign01Icon },
  ];

  return (
    <ul className="flex gap-4">
      {links.map(({ href, icon }, index) => (
        <li key={index}>
          <a
            href={href}
            className="link-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HugeiconsIcon
              icon={icon}
              size={20}
              color="currentColor"
              strokeWidth={1.5}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
