import Navbar from "../../components/Navbar/navbar.js"
import Sidebar from "../../components/Sidabar/Sidebar.js"
// import style
import "./home.css";

let home = document.createDocumentFragment();


export default class HomePage {
    constructor() {

    }

    render() {
        home.appendChild(new Navbar().render({
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

        if (window.screen.width > 1000) {
            let sidebar = new Sidebar({img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wHgx?ver=5481", name: "Monzer Omer"}, "Admin")
            .addClass(["links", "sidebar"])
            .addProfile()
            .addButton("Dashboard", "active", ["link"])
            .addButton("Home", "active", ["link"])
            .render()

            home.appendChild(sidebar)
        }


        return home;
    }

    

}