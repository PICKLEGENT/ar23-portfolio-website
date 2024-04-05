import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
    const languages = [
        { code: 'ru', lang: 'rus' },
        { code: 'en', lang: 'eng' },
    ];

    const { i18n } = useTranslation();

    const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            {languages.map((lng) => (
                <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    className='mx-2 px-2 py-1 text-center font-bold tracking-wide text-purple-800 dark:text-yellow-400 hover:text-neutral-100 hover:dark:text-zinc-900 hover:bg-purple-800 hover:dark:bg-yellow-400 duration-300 ease-in uppercase border border-purple-800 dark:border-yellow-400 rounded-lg'
                >
                    {lng.lang}
                </button>
            ))}
        </div>
    );
};

export default LanguageChanger;