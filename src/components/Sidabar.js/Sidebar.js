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
        
    }

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
    addFooter(lineClasses, productName, ProductNameClasses){
        this.line = document.createElement("hr");
        this.line.className = lineClasses;

        this.productMark = document.createElement("p");
        this.productMark.innerText = `${productName} ${new Date().getFullYear()}`;
        this.productMark.className = ProductNameClasses;
    }
}