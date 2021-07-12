//1.
let nameAndAge = [
    { name: "Soso", age: 26},
    { name: "Nino", age: 25},
    { name: "Mariami", age: 23},
    { name: "Giorgi", age: 27},
    { name: "Sophie", age: 26},
];

//2.
let someOne = {
    firstName: "Mariam",
    lastName: "Chaligava",
    nicknames: ["Makaka" , "Mari" , "Mariko" , "Fai"],
    age: 23,
    monthlyIncome: 3200,
};

someOne.nicknames.push("Marita");

//3. 
let rect = {
    width: 6,
    height: 4,
};

let Area = rect.width * rect.height
console.log("area of rectangle is " + Area);

//4.
let coordinates = [
    {x: -3, y: 4},
    {x: 5, y: -12},
];

let x1 = coordinates[0].x;
let y1 = coordinates[0].y;
let x2 = coordinates[1].x;
let y2 = coordinates[1].y;

let distance1 = Math.sqrt (x1 * x1 + y1 * y1);
console.log ("distance between first points is " + distance1);

let distance2 = Math.sqrt (x2 * x2 + y2 * y2);
console.log ("distance between second points is " + distance2);



