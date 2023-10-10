import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <nav>
                <button onClick={toggleTheme}>changeTheme</button>
                <Link to={"/about"}>About</Link>
                <Link to={"/"}>MainPage</Link>
            </nav>
            <Suspense fallback={<>Load...</>}>
                <Routes>
                    <Route element={<MainPage />} path={"/"} />
                    <Route element={<AboutPage />} path={"/about"} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
