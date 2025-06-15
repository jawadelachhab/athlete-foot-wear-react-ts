import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

type TCurrency = {
  name: string;
  slug: string;
};

type CurrencySwitcherProps = {
  currencies: TCurrency[];
};

const CurrencySwitcher = ({ currencies }: CurrencySwitcherProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<TCurrency>(currencies[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleCurrencyChange = (currency: TCurrency) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false); // Close the dropdown after selecting
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <div className="relative group">
      <div
        className="flex items-center px-2 py-4 text-sm font-medium cursor-pointer"
        onClick={toggleDropdown}
        aria-label="Select currency"
        aria-expanded={isDropdownOpen ? "true" : "false"}
      >
        {selectedCurrency.name}
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={17}
          className={`ml-1 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isDropdownOpen && (
        <div className="absolute start-1/2 -translate-x-1/2 min-w-6 text-center bg-white shadow z-20 opacity-100 visible duration-300 transition-opacity">
          {currencies.map((currency, index) => (
            <button
              key={index}
              className="px-4 py-2 text-sm duration-300 transition-colors hover:text-primary"
              onClick={() => handleCurrencyChange(currency)}
              aria-label={`Select ${currency.name} as currency`}
            >
              {currency.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySwitcher;
