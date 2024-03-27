
console.log("object")

//class => always have a construter otherwise JS will create a empty constructer

class car
{
    construter(p,n)
    {
        this.price = p
        this.name = n
    }

    showName()
    {
        console.log(`The car name is:${this.name}`);
    }
}

const ob = new car(125,"mahindra");
ob.showName();

//callback Functions => use to handle Async programming,when a function passed as a parameter then it is called callback function

add(showres,2,5)

function add(callShow,x,y)
{
    let res = x+y;
    callShow(res);
}

function showres(r)
{
    console.log(r);
}

//foreach Method

let numbers = [1,2,4,24,6]

numbers.forEach(display)
numbers.forEach(double)
numbers.forEach(display)

function display(element)
{
console.log(element)
}

function double(ele ,index,arr )
{
    numbers[index] = ele *2
}

//map => accept callback function and return a new array

const arr1 = [1,2,3,45]

const newarr1 = arr1.map(power)

function power(ele)
{
    return Math.pow(ele ,2)
}
console.log("new array using map")
console.log(newarr1)

//filter => create array by filtering out element

const arr2 = [1,2,3,44]

const newarr2 = arr2.filter(isEven)

function isEven(ele)
{
    return ele %2 === 0
}
console.log(newarr2)

//reduce => reduce the element into single value

const arr3 =[1,2,35,6]

const i = arr3.reduce(oneEle)

function oneEle(ele1,ele2)
{
    return ele2;
}
console.log("The last element is =>"+ i);

//function expression 