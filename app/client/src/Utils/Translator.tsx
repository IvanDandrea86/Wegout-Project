
import { Fragment } from 'react';
import {useTranslator} from '../Hooks/useTranslator'

type TranslatorProps = {
	trad: string;
};

const Translator: React.FC<TranslatorProps> = ( {trad} ) =>
{
	return <Fragment>{useTranslator(trad)}</Fragment>

}
export default Translator;