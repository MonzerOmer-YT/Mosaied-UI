import {navbar} from "../../components/Navbar/navbar.js"
import {Home} from "../../api/home.api.js"

// import style
import "./home.css";



export let home =  async (profile, product) => {
    return `
    ${navbar(profile, product)}

    `
};

