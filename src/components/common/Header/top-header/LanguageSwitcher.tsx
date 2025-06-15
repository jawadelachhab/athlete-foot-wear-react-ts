import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

type TLanguage = {
  code: string;
  name: string;
  slug: string; 
  flag: string;
};

type LanguageSwitcherProps = {
  languages: TLanguage[];
};

const LanguageSwitcher = ({ languages }: LanguageSwitcherProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<TLanguage>(languages[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleLanguageChange = (language: TLanguage) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <div className="relative">
      <div
        className="flex items-center px-2 py-4 text-sm font-medium cursor-pointer"
        onClick={toggleDropdown}
        aria-label="Select language"
        aria-expanded={isDropdownOpen ? "true" : "false"}
      >
        <img
          src={selectedLanguage.flag}
          width={16}
          height={16}
          className="w-4 h-4 rounded-full mr-2"
          alt={selectedLanguage.name}
        />
        {selectedLanguage.name}
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={17}
          className={`ml-1 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isDropdownOpen && (
        <div className="absolute start-1/2 -translate-x-1/2 min-w-28 text-center bg-white shadow z-20 opacity-100 visible duration-300 transition-opacity">
          {languages.map((language, index) => (
            <button
              key={index}
              className="flex items-center px-4 py-2 text-sm duration-300 transition-colors hover:text-primary"
              onClick={() => handleLanguageChange(language)}
            >
              <img
                src={language.flag}
                width={16}
                height={16}
                className="w-4 h-4 rounded-full mr-2"
                alt={language.name}
              />
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
