import React from 'react';
import { useTranslation } from 'react-google-multi-lang';

const LanguageSwitcher = () => {
  const { setLanguage } = useTranslation();

  return (
    <div>
      <button onClick={() => setLanguage('en')}>Inglês</button>
      <button onClick={() => setLanguage('es')}>Espanhol</button>
    </div>
  );
};

export default LanguageSwitcher;