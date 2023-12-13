import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

type Languages = {
    fr: object,
    en: object
}

const loadTranslations: () => Languages = () => {
    const context = import.meta.glob('./locales/*.json', { eager: true })

    return Object.keys(context)
        .map((key) => ({ key, name: key.match(/\/([a-z_]+)\.json$/i)?.[1] }))
        .reduce(
            (modules, { key, name }) => ({
                ...modules,
                [name ?? '']: context[key],
            }),
            {} as Languages,
        )
}

const translations = loadTranslations()

i18n.use(initReactI18next).use(LanguageDetector).init({
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // react already safe from xss
    },
    resources: {
        en: {
            translation: translations.en,
        },
        fr: {
            translation: translations.fr,
        },
    },

})

export default i18n