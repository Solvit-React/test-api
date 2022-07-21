import  ReactDOM  from "react-dom/client";
import { App } from "./ui/app";

const appContainer = document.querySelector("#appContainer");
const root = ReactDOM.createRoot(appContainer);
root.render(<App/>);