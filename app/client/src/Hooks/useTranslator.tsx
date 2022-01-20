import {useContext }from 'react';
import {languageContext} from '../Context/LocalesProvider'

import languageEN from '../Locales/en.json';
import languageFR from '../Locales/fr.json';
import languageIT from '../Locales/it.json';
import languageES from '../Locales/es.json';
import languageDE from '../Locales/de.json';
import languageNL from '../Locales/nl.json';

const availableLanguages: { [key: string]: any } = {
	'fr': languageFR,
	'en': languageEN,
	'it': languageIT,
	"es": languageES,
	"de": languageDE,
	"nl": languageNL,
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