import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";

const Languages = () => {
    const {lang} = useTranslation();

    const handleChangeLocale = (lang: string) => {
        setLanguage(lang);
    };

    const items: any[] = [
        {
            key: "ru",
            label: (
                <span className="pointer" onClick={() => handleChangeLocale("ru")}>
          Русский
        </span>
            ),
        },
        {
            key: "uz",
            label: (
                <span className="pointer" onClick={() => handleChangeLocale("uz")}>
          O'zbekcha
        </span>
            ),
        },
    ];

    return (
       null
    );
};

export default Languages;
