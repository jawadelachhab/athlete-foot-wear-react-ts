import { footerData } from "@data";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SmartPhone01Icon,
  Mail01Icon,
  Location03Icon,
} from "@hugeicons/core-free-icons";

const ContactInfo = () => {
  const { physicalAddress, emailAddress, phone } = footerData;

  const contactItems = [
    {
      icon: Location03Icon,
      text: physicalAddress,
    },
    {
      icon: Mail01Icon,
      text: emailAddress,
      href: `mailto:${emailAddress}`,
    },
    {
      icon: SmartPhone01Icon,
      text: phone,
      href: `tel:${phone}`,
    },
  ];

  return (
    <div className="md:col-span-3">
      <h6 className="text-lg font-bold capitalize mb-5">Contact Info</h6>
      <ul>
        {contactItems.map(({ icon, text, href }, index) => (
          <li key={index} className="text-sm mb-4">
            {href ? (
              <a href={href} className="link-hover">
                <HugeiconsIcon
                  icon={icon}
                  size={18}
                  color="currentColor"
                  className="inline-block mr-2"
                />
                {text}
              </a>
            ) : (
              <>
                <HugeiconsIcon
                  icon={icon}
                  size={18}
                  color="#ffffff"
                  className="inline-block mr-2"
                />
                {text}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
