import { Container } from "@components/ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { footerData } from "@data";
import {
  ShippingTruck01Icon,
  CustomerSupportIcon,
  DollarCircleIcon,
  CreditCardIcon,
} from "@hugeicons/core-free-icons";

const ShopInfo = () => {
  const icons = [
    ShippingTruck01Icon,
    CustomerSupportIcon,
    DollarCircleIcon,
    CreditCardIcon,
  ];

  const shopItems = footerData.shopInfo.map((item, i) => ({
    ...item,
    icon: icons[i],
  }));

  return (
    <Container className="py-8 border-b border-[#303338]" as="div">
      <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x md:divide-[#303338]">
        {shopItems.map(({ icon, title, content }, index) => (
          <div
            key={index}
            className={`flex gap-3 mb-4 md:mb-0 ${
              index === 0
                ? "md:pr-4"
                : index === shopItems.length - 1
                ? "md:pl-4"
                : "md:px-4"
            }`}
          >
            <HugeiconsIcon
              icon={icon}
              size={36}
              color="#ffff"
              strokeWidth={1}
            />
            <div>
              <h5>{title}</h5>
              <p className="text-sm">{content}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ShopInfo;
