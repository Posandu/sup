import App from "./App.svelte";
import "ress/dist/ress.min.css";
import "./base.css";
import { mount } from "svelte";

const app = mount(App, {
	target: document.getElementById("app")!,
});

export default app;
