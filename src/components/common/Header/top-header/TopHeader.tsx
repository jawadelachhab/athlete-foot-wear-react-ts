import LanguageSwitcher from "./LanguageSwitcher";
import CurrencySwitcher from "./CurrencySwitcher";
import UserMenu from "./UserMenu";
import { Container } from "@components/ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { SmartPhone01Icon } from "@hugeicons/core-free-icons";
import { headerData, footerData } from "@data";

const TopHeader = () => {
  const { currencies, languages } = headerData;
  const { phone } = footerData;

  return (
    <div className="bg-dark text-white">
      <Container as="div" className="border-b text-sm">
        <div className="flex  justify-between items-center ">
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <LanguageSwitcher languages={languages} />
            </li>
            <li>
              <CurrencySwitcher currencies={currencies} />
            </li>
            <li className="group">
              <a
                href={`tel:${phone}`}
                className="flex items-center duration-300 transition-colors group-hover:text-primary"
                aria-label={`Call us at ${phone}`}
              >
                <HugeiconsIcon
                  icon={SmartPhone01Icon}
                  size={17}
                  className="mr-1"
                />
                {phone}
              </a>
            </li>
          </ul>

          <UserMenu />
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
