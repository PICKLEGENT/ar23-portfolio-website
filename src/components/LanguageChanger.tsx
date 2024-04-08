import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
    const [lang, setLang] = useState(true)

    const { i18n } = useTranslation();

    const changeLanguage = () => {
        setLang(!lang)
        i18n.changeLanguage(lang === true ? ('ru') : ('en'));
    };

    const width: number = 250
    const radius: number = 100

    return (
        <>
            <button onClick={() => changeLanguage()}>
                {lang === true ?
                    <div className={`flex justify-start items-center w-[${width}px] bg-yellow-400 rounded-full`}>
                        <div
                            className={`flex justify-center items-center w-[${radius}px] h-[${radius}px] m-1 text-xl bg-zinc-900 rounded-full uppercase`}
                        >
                            eng
                        </div>
                    </div>
                    :
                    <div className={`flex justify-end items-center w-[${width}px] bg-yellow-400 rounded-full`}>
                        <div
                            className={`flex justify-center items-center w-[${radius}px] h-[${radius}px] m-1 text-xl bg-zinc-900 rounded-full uppercase`}
                        >
                            rus
                        </div>
                    </div>
                }
            </button>
        </>
    );
};

export default LanguageChanger;