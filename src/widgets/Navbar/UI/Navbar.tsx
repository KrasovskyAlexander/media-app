import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/UI/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    className={cls.mainLink}
                    to={"/about"}
                    theme={AppLinkTheme.PRIMARY}
                >
                    {t("about")}
                </AppLink>
                <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
                    {t("main")}
                </AppLink>
            </div>
        </nav>
    );
};
