import { useTranslation } from "react-i18next";

const Ticker = () => {
    const { t } = useTranslation()

    return (
        <div className="absolute left-0 mt-12 text-2xl lg:text-3xl overflow-hidden">
            <div className="ticker__wrapper flex uppercase text-zinc-900 dark:text-neutral-100 whitespace-nowrap flex-shrink-0">
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
            </div>
            <div className="ticker__wrapper flex uppercase text-neutral-500 whitespace-nowrap flex-shrink-0">
                <div className="ticker__item-to-right">{t('ticker')}</div>
                <div className="ticker__item-to-right">{t('ticker')}</div>
                <div className="ticker__item-to-right">{t('ticker')}</div>
                <div className="ticker__item-to-right">{t('ticker')}</div>
                <div className="ticker__item-to-right">{t('ticker')}</div>
                <div className="ticker__item-to-right">{t('ticker')}</div>
                <div className="ticker__item-to-right">{t('ticker')}</div>
                <div className="ticker__item-to-right">{t('ticker')}</div>
                <div className="ticker__item-to-right">{t('ticker')}</div>
                <div className="ticker__item-to-right">{t('ticker')}</div>
            </div>
            <div className="ticker__wrapper flex uppercase text-zinc-900 dark:text-neutral-100 whitespace-nowrap flex-shrink-0">
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
                <div className="ticker__item-to-left">{t('ticker')}</div>
            </div>
        </div>
    )
}

export default Ticker