import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const init = () => {
	const appContainer = document.createElement("div");
	if (!appContainer) throw new Error("Can not find AppContainer");

	document.body.appendChild(appContainer);
	const root = createRoot(appContainer);
	appContainer.id = "app";
	root.render(<App />);
};

init();
