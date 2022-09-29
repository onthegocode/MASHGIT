//Mash
function Mash() {
    return "You will live in a: " + getHome() + " and you will have: " + getChildrenCount() + " kids"+" and you'll drive in a: "+getCar();
}
console.log(Mash());
//Type of Homes
function getHome(){
    let x = process.argv[2];
const randomly = ["Mansion","Apartment","Shack", "House", "Pool Boy"];
randomly.push(x);
let home = Math.floor(randomly.length * Math.random());
let homes = randomly[home];
return homes 

}
//Number of child
function getChildrenCount(){
    let x = process.argv[3];

    let child = Math.floor(Math.random() * 100);
    if (Math.floor(Math.random()* 2) == 1 ){
        return child;
    }
    else {
        return process.argv[3];
    }
    }
//Type of cars
function getCar(){
    process.arg
    const cars = ["Lambo","Convertible","box with wheels","mom car"];
    let car = Math.floor(cars.length * Math.random());
    let mycar = cars[car];
    return mycar;
}
