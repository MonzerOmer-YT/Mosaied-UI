// import style
import "./navbar.css";
let navbar = document.createElement("nav");
navbar.className= ["navbar"]
let navbar_content = document.createDocumentFragment();

export default class Navbar {
    /**
     * @param {Object} config element configration
     * @param {Object} data element data
     */

    #generate() {

        if (this.schame.screenWidth < 700) {

            let Header = document.createElement("h4"); // create the title element

            //add class
            Header.className = this.schame.header.class;

            Header.innerText = this.schame.header.text; // add text
            navbar_content.appendChild(Header); // attach to container
        }

        if (this.schame.auth) {
            // profile image
            let image = document.createElement("img");
            image.src = this.schame.img.source; // image source
            image.alt= this.schame.img.alt

            //add class
            image.className = this.schame.img.class;

            navbar_content.appendChild(image); // attach to container
        }

    }

    render(schame) {
        this.schame = schame;

        this.#generate();
        navbar.appendChild(navbar_content)
        return navbar;
    }

}