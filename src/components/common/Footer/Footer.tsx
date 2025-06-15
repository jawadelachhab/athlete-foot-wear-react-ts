import ScrollTop from "./ScrollTop";
import SocialMedia from "./SocialMedia";
import Navigation from "./Navigation";
import ContactInfo from "./ContactInfo";
import ShopInfo from './ShopInfo'
import { Container } from "@components/ui";
import { footerData } from "@data";

const Footer = () => {
  const { logo, content, copyright } = footerData;

  return (
    <footer className="bg-dark text-white ">

      <ShopInfo/>


      <Container className="py-16" as="div">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className=" md:col-span-3">
            {logo?.source && (
              <img
                src={logo.source}
                alt={logo.alternative || "Logo"}
                className="mb-6"
                width={182}
                height={47}
              />
            )}
            {content && <p className="text-white text-sm mb-6">{content}</p>}
            <SocialMedia />
          </div>

          <Navigation />
          <ContactInfo />
        </div>
      </Container>

      <Container className="py-8 border-t border-[#303338]" as="div">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <p className="text-left mb-0 text-white text-sm">{copyright}</p>
          <img
            src="/images/payment.png"
            alt="Accepted payment methods"
            className="ml-auto"
            width={218}
            height={23}
          />
        </div>
      </Container>

      <ScrollTop />
    </footer>
  );
};

export default Footer;
