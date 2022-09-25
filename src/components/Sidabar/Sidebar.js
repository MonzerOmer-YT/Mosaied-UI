import { changePage } from "../..";
import "./sidebar.css";

let sidebar = document.createElement("div");
let sidebar_content = document.createDocumentFragment();

export default class Sidebar {
    constructor(profile, role) {
        this.profile = profile;
        this.role = role;
    }

    addClass(classValue) {
        sidebar.className = classValue.join(" ");
        return this;
    }

    addProfile() {
        this.profileImg = document.createElement("img");
        this.profileName = document.createElement("p");
        this.profileRole = document.createElement("span");

        this.profileImg.src = this.profile.img;
        this.profileImg.alt = "Profile Image";
        this.profileName.innerText = this.profile.name;
        this.profileRole.innerText = this.role;

        sidebar_content.appendChild(this.profileImg)
        sidebar_content.appendChild(this.profileName)
        sidebar_content.appendChild(this.profileRole)

        return this;
    }

    /**
     * 
     * @param {String} value the text will be shown in the button
     * @param {String} state the state of the button if `active` or `disabled`
     * @param {String} url the url the button will take the user to
     * @param {[String]} classes all the classes will be added to the button
     * @returns {Sidebar}
     */
    addButton(value, state, classes) {
        this.btn = document.createElement("p");
        this.btn.className = classes.join(" ");
        this.btn.className += ` ${state}`;
        this.btn.innerText = value;
        this.btn.onclick = (event) => {
            changePage(value)
        }
        sidebar_content.appendChild(this.btn);

        return this;
    }

    // sidebar footer
    /**
     * 
     * @param {[String]} lineClasses the classes will be added to the line above the footer
     * @param {String} productName the product name Mosaied
     * @param {[String]} ProductNameClasses the classes will be added to the product name
     * @return {Sidebar}
     */
    addFooter(lineClasses, productName, ProductNameClasses) {
        this.line = document.createElement("hr");
        this.line.className = lineClasses;

        this.productMark = document.createElement("p");
        this.productMark.innerText = `${productName} ${new Date().getFullYear()}`;
        this.productMark.className = ProductNameClasses;

        sidebar_content.appendChild(this.line)
        sidebar_content.appendChild(this.productMark)


        return this;
    }

    render() {
        sidebar.appendChild(sidebar_content)
        return sidebar;

    }
}