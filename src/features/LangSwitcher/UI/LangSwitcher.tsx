import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { Button, ThemeButton } from "shared/UI/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = (props: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const { className } = props;

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
        >
            {t("lang")}
        </Button>
    );
};
