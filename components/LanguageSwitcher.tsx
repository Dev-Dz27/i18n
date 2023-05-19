
interface LanguageSwitcherProps {
  currentLocale: string;
  onChange: (locale: string) => void;
  supportedLocales: string[];
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLocale,
  onChange,
  supportedLocales,
}) => {
  const locales = supportedLocales.filter((locale) => locale !== "default");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value;
    console.log(selectedLocale)
    onChange(selectedLocale);
  };

  return (
    <select value={currentLocale} onChange={handleLanguageChange}>
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
