import { SupportedLanguages } from '@/data/contentData'

export interface FooterProps {
    language: SupportedLanguages
}

export const Footer = ({ language }: FooterProps) => {
    const changeLanguage = (lang: SupportedLanguages) => {
        const newLang =
            lang === SupportedLanguages.es
                ? SupportedLanguages.en
                : SupportedLanguages.es
        const newPath = window.location.pathname.replace(lang, newLang)
        window.history.replaceState(null, '', newPath)
        window.location.pathname = newPath
    }
    return (
        <footer className="h-16  absolute bottom-[75px] left-[112px] right-[78px]">
            <nav className="flex justify-between items-center">
                <button
                    onClick={() => {
                        window.history.back()
                    }}
                    className="text-lg font-bold pl-2"
                >
                    <img
                        src="/BackButton.svg"
                        alt="Back"
                        className="w-[101px] h-[43px]"
                    />
                </button>
                <button
                    onClick={() => changeLanguage(language)}
                    className="font-calderDarkGritShadow text-[30px] uppercase bg-languageButton bg-no-repeat bg-cover w-[223px] h-[73px]"
                >
                    {language === SupportedLanguages.en ? 'español' : 'english'}
                </button>
            </nav>
        </footer>
    )
}
