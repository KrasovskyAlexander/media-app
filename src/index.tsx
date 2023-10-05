import { render } from "react-dom";
import sum from "./test";
import "./main.scss";
import Btn from "./btn/btn";

console.log(sum(6, 5));

render(
    <div className="block">
        {sum(6, 5)}
        <Btn />
    </div>,
    document.getElementById("root")
);
