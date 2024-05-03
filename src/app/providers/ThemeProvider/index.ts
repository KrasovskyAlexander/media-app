import ThemeProvider from "./ui/ThemeProvider";
import { useTheme } from "./lib/useTheme";
import { Theme } from "./lib/ThemeContext";

export { ThemeProvider, useTheme, Theme };

export function createMap<T>(list: T[]) {
    return function (cb: (el: T) => T) {
        const result: T[] = [];

        for (let el of list) {
            result.push(cb(el));
        }

        return result;
    };
}

const ma = createMap([1, 2, 3, 4]);
const newMas = ma((el) => el + 2);

newMas.forEach((element) => {
    console.log(element);
});
