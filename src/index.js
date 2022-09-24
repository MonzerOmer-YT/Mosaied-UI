import "./app.css";
console.log("Hello World!");
import HomePage from "./pages/home/home.js";
const app = document.getElementById("app");

app.appendChild(new HomePage().render());