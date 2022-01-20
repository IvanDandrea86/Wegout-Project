import {Language }from "../Locales/Locales";
import {createContext,useState } from 'react';
type LanguageContextData =
{
	language: Language;
	setLanguage?: Function;
}
export const languageContext= createContext<LanguageContextData>({
	language: 'en',
});

const LanguageProvider: React.FC<{}> = ({ children }) =>
{
	const [ language, setLanguage ] = useState<Language>('en');
	return (
		<languageContext.Provider
			value={{
				language,
				setLanguage
			}}
		>
			{ children }
		</languageContext.Provider>
	);
}
export default LanguageProvider;

