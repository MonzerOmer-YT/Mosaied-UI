export class Home{
    static getProfile(){
        return new Promise((resolve, reject) => {
            resolve({img: "/images/monzeromer.jpg", name:"Monzer Omer", role: "Admin"})
        });
    }
    static getProductData(){
        return new Promise((resolve, reject) => {
            resolve({name: "Mosaied", Owner: "Monzer Omer", version: "1.0"})
        });
    }
}