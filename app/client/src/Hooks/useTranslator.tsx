import {useContext }from 'react';
import {languageContext} from '../Context/LocalesProvider'

import languageEN from '../Locales/en.json';
import languageFR from '../Locales/fr.json';

const availableLanguages: { [key: string]: any } = {
	'fr': languageFR,
	'en': languageEN
};



export const useTranslator = (key: string): string =>
{
	const { language } = useContext(languageContext);

	if (availableLanguages[language] !== undefined) {
		return availableLanguages[language][key] || key;
	} else {
		console.error(`${language} is not an available language`);
	}

	return key;
}