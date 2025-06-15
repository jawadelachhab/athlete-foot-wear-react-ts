import { Breadcrumb } from "@components/ui";
import { ContactInfo, ContactForm } from "@components/pages/contactus";

const ContactUs = () => {
  
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <ContactInfo  />
      <ContactForm  />
    </>
  );
};

export default ContactUs;
