import {Language }from "../Locales/Locales";
import {createContext,useState } from 'react';
interface LanguageContextData 
{
	language: Language ;
	setLanguage: Function;
}

export const languageContext= createContext<LanguageContextData>({
}as LanguageContextData);


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

