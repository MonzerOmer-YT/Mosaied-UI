import "./app.css";
console.log("Hello World!");
import HomePage from "./pages/home/home.js";

const app = document.getElementById("app");
app.appendChild(new HomePage().render());

export function changePage(page) {
    console.log(page)
    if (page === "Home"){
        app.innerHTML = ""
        app.replaceChildren(new HomePage().render());
        // app.appendChild(new HomePage().render());
    }
}