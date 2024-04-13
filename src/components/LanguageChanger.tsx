// import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
    const { i18n } = useTranslation();

    const lngCode = localStorage.getItem('i18nextLng')

    const changeLanguage = () => {
        i18n.changeLanguage(lngCode === 'ru' ? ('en') : ('ru'));
    };

    return (
        <>
            <button onClick={() => changeLanguage()}>
                {lngCode === 'en' ?
                    <div className={`flex justify-start items-center w-[75px] lg:w-[250px] bg-purple-800 dark:bg-yellow-400 rounded-full`}>
                        <div
                            className={`flex justify-center items-center w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] m-1 text-xs lg:text-xl bg-zinc-100 dark:bg-zinc-900 rounded-full uppercase`}
                        >
                            eng
                        </div>
                    </div>
                    :
                    <div className={`flex justify-end items-center w-[75px] lg:w-[250px] bg-purple-800 dark:bg-yellow-400 rounded-full`}>
                        <div
                            className={`flex justify-center items-center w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] m-1 text-xs lg:text-xl bg-zinc-100 dark:bg-zinc-900 rounded-full uppercase`}
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