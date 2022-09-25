// import style
import "./navbar.css";

export let navbar = (profile, product) => {
    return `
    <nav class="navbar">
                <p>${product.name}</p>
                <img src="${profile.img}" alt="${profile.name}" class="profile">
            </nav>
    `
}