//String cheatSheet
let firstname ="Ramanti";
let surname = "Shaw";
let ex = "ho-ho-ho";

console.log(firstname+surname);
console.log(firstname.indexOf("A"));
console.log(firstname.indexOf('a'));
console.log(surname.charAt(1));
console.log(firstname.toUpperCase());
console.log(surname.toLowerCase());
console.log(ex.split("-"));

//1)Exercise

// Create a new empty array literal and assign it to the variable clothes.

// Add 5 of your favorite items of clothing as strings using the push() method.

// Remove the fifth piece of clothing from the array using the pop() method.

// Add a new piece of clothing using the push() method.

// Use console.log to show the third item from the clothes array in the console.

// Create a new empty object literal and assign it to the variable favCar.

// Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

// Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

// Use the console to log the entire favCar object.

let clothes= [];

clothes.push("shirt");
clothes.push("Jeans");
clothes.push("paint");
clothes.push("spcks");
clothes.push("Tshirt");

console.log(clothes);

clothes.pop();

console.log("After removing 5th cloth =>"+ clothes);

console.log("Third iteam:"+ clothes[2]);

let favCar = {}

favCar.color = "Red";
favCar.covertible = true;

console.log(favCar);


//Use of TypeOf

console.log(typeof("Mithu"))
console.log(typeof(favCar))
console.log(typeof(10.2))
console.log(typeof(clothes))

//try and catch in JS

console.log("Try catch here")
function addTwoNumbers(a,b)
{
    try{
    if(typeof(a) != 'number')
    {
        throw new ReferenceError;
    }
    else if(typeof(a) != 'number')
    {
        throw new ReferenceError;  
    }
    else
    {
    console.log(a+b);
    }
    }
    catch(err)
    {
           console.log("The erroor is :"+ err);
    }
}

addTwoNumbers(5,5);
addTwoNumbers("5",2);

//var keyword -> global access
var user;
console.log(user);
user =" Mithu";
console.log(user);

function userchange()
{
    user ="Ramanti";
    console.log(user);  
}

userchange();
console.log(user)
//another use of var
var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

//console.log(localVar);

//let keyword ->local access
let age;
console.log(age);

function agechange()
{
    let id = 5;
    age=30;
    console.log(age);
    console.log(id);  
}
agechange();
age = 20;
console.log(age)
//console.log(id);
id = 4;
console.log(id);

//classes and objects

class car{

    printName(name)
    {
        console.log('Name of the car is ${name}');
    }
}

var ob = new car()
ob.printName("Hell")

var person =
{
    name : "Ramanri",
    lastName : "Shaw",
    fullname : (n,l) => console.log( n+l),
}
person.fullname(person.name,person.lastName)


