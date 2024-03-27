//function expression => it is a way to define dunction as a value

setTimeout(function()
{
    console.log("Hello world")
},3000)

const num = [1,2,4,5]

const resNum = num.map(function square(ele)
{
   return Math.pow(ele,2)
})

console.log(resNum)

//Arrow Function

const resAdd = (a,b) => {return a+b}
console.log(resAdd(5,1))

//Static keyword
class circle
{
    static pi = 3.41;

    static area(radius)
    {
      return radius*this.pi;
    }
}

console.log(circle.pi)
console.log(circle.area(5))

//class example of static keyword

class family
{
    static usename ;

    constructer(p)
    {
        this.p = p 
        //family.usename = n
    }
}

const ob= new family(12)
console.log(ob.p);

//Inheritance in java script

class Animal
{
    alive = true
    eat()
    {
        console.log(`this ${this.name} is eating`);
    }

    sleep()
    {
        console.log(`this ${this.name} is sleeping`);
    }

    swim()
    {
        console.log(`this ${this.name} is swimming`);
    }
    
}

class fish extends Animal
{
    name = "fish";

}

class rabbit extends Animal
{
    name = "rabbit";

}

const fs = new fish();

console.log(fs.alive);
fs.swim()

//super keyword in java script
class Student
{
    constructor(clg,clas)
    {
        this.clg = clg;
        this.class = clas;
    }
}

class Girl extends Student
{
    constructor(clg,clas,name)
    {
        super(clg,clas);
        this.name = name;
    }
}

const st = new Girl("TIU","F5","Rani");

console.log(st.class);
console.log(st.name);
console.log(st.clg);