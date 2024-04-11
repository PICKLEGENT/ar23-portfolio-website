import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
    const [lng, setLang] = useState(true)

    const { i18n } = useTranslation();

    const lngCode = localStorage.getItem('i18nextLng')

    const changeLanguage = () => {
        setLang(!lng)
        i18n.changeLanguage(lng === true ? ('ru') : ('en'));
    };

    return (
        <>
            <button onClick={() => changeLanguage()}>
                {lngCode === 'en' ?
                    <div className={`flex justify-start items-center w-[250px] bg-purple-800 dark:bg-yellow-400 rounded-full`}>
                        <div
                            className={`flex justify-center items-center w-[100px] h-[100px] m-1 text-xl bg-zinc-100 dark:bg-zinc-900 rounded-full uppercase`}
                        >
                            eng
                        </div>
                    </div>
                    :
                    <div className={`flex justify-end items-center w-[250px] bg-purple-800 dark:bg-yellow-400 rounded-full`}>
                        <div
                            className={`flex justify-center items-center w-[100px] h-[100px] m-1 text-xl bg-zinc-100 dark:bg-zinc-900 rounded-full uppercase`}
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