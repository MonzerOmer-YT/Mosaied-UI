import Navbar from "../../components/Navbar/navbar.js"

// import style
import "./home.css";

let home = document.createDocumentFragment();

let navbar = new Navbar()

export default class HomePage {
    constructor() {

    }

    render() {
        home.appendChild(navbar.render({
            header: {
                text: "Mosaied",
                class: ["header"]
            },
            img: {
                source: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wHgx?ver=5481",
                class: ["profile"],
                alt: "User Image"
            },
            screenWidth: 500,
            auth: true
        }))

        return home;
    }

}