import React from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  
  console.log(localStorage.getItem('i18nextLng'));

  return (
    <>
      <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
      
      <h1>{t("Hello")}</h1>
      
    </>
  );
};

export default App;
