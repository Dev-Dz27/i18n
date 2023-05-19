import type { AppProps } from "next/app";
// import LanguageSwitcher from "../components/LanguageSwitcher";
import { DICTIONARIES } from "../lib/constants";
import React,
 {
  //  useEffect,
   useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  // const [locale, setLocale] = useState("default");
  const [dictionary, setDictionary] = useState(DICTIONARIES["default"]);
  // const [loading, setLoading] = useState(true);
  // const supportedLocales = Object.keys(DICTIONARIES);

  // useEffect(() => {
  //   const userPreferredLocale = navigator.language;
  //   if (supportedLocales.includes(userPreferredLocale)) {
  //     setDictionary(DICTIONARIES[userPreferredLocale]);
  //     setLoading(false);
  //   } else {
  //     const [language] = userPreferredLocale.split("-");
  //     if (supportedLocales.includes(language)) {
  //       setDictionary(DICTIONARIES[language]);
  //       setLoading(false);
  //     } else {
  //       setLoading(false);
  //     }
  //   }
  // }, []);

  // const handleLanguageChange = (selectedLocale: string) => {
  //   if (supportedLocales.includes(selectedLocale)) {
  //     setLocale(selectedLocale);
  //     const selectedDictionary = DICTIONARIES[selectedLocale];
  //     setDictionary(selectedDictionary);
  //   } else {
  //     console.log(`Locale '${selectedLocale}' is not supported.`);
  //     setLocale("default");
  //     setDictionary(DICTIONARIES["default"]);
  //   }
  // };

  // if (loading) {
  //   return <div>Loading...</div>; // Replace this with your desired loading indicator
  // }

  return (
    <>
      {/* <LanguageSwitcher
        currentLocale={locale}
        onChange={handleLanguageChange}
        supportedLocales={supportedLocales}
      /> */}
      <Component {...pageProps} 
      // dictionary={dictionary}
       />
    </>
  );
}
