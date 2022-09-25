import "./sidebar.css";

let sidebar = document.createElement("div");
let sidebar_content = document.createDocumentFragment();

export default class Sidebar{
    constructor(profile, role){
        this.profile = profile;
        this.role = role;
    }

    addClass(classValue){
        sidebar.className += classValue;
        return this;
    }

    addProfile(){
        this.profileImg = document.createElement("img");
        this.profileName = document.createElement("p");
        this.profileRole = document.createElement("span");

        this.profileImg.src = this.profile.img;
        this.profileName.innerText = this.profile.name;
        this.profileRole.innerText = this.role;

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
    addButton(value, state, url, classes){
        this.btn = document.createElement("a");
        this.btn.href = url;
        this.btn.className = classes;
        this.btn.className += state;
        this.btn.innerText = value;

        sidebar_content.appendChild(btn);

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
    addFooter(lineClasses, productName, ProductNameClasses){
        this.line = document.createElement("hr");
        this.line.className = lineClasses;

        this.productMark = document.createElement("p");
        this.productMark.innerText = `${productName} ${new Date().getFullYear()}`;
        this.productMark.className = ProductNameClasses;

        return this;
    }
}