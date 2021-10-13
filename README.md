#  EXERCÍCIOS DO CURSO WEB FULLSTACK SANTANDER CODERS - LETS CODE :

## *exercício 1:*

### [**can go to the matrix:**](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/tree/main/can-go-to-the-matrix)

create a series of name strings saying whether or not they can go to The Matrix >= 18 years old

input object:
~~~
[ 
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
~~~

expected output:
~~~
0: "Angelina Jolie can go to The Matrix"
1: "Eric Jones is under age"
2: "Paris Hilton is under age"
3: "Kayne West is under age"
4: "Bob Ziroll can go to The Matrix"
~~~


## *exercício 2:*

### [**voters**](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/tree/main/voters)
Given a number of potential voters, return an object that represents the voting results.
include how many potential voters were between 18 and 25, how many were 26 to 35, how many were 36 to 55, and how many from each of these age groups actually voted. And return an object resulting from these properties.

input:
~~~
const voters = [ 
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false} 
]
~~~
expected output:
~~~
MID: {votersCount: 3, peopleCount: 4}
OLD: {votersCount: 3, peopleCount: 4}
YOUNG: {votersCount: 1, peopleCount: 4}
~~~


## *exercício 3:*

### [**Calculator**](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/tree/main/sample-calculator)
Create a calculator module with:
- "enter" function
- "equals" function
- "list" function which shows all operations already performed on the calculator, followed by their results
- "reset" function

sugestion test:
~~~
calculator.enter(10)
calculator.enter('+') // can also be '-', '*', '/'
calculator.enter(55)
calculator.equals()

calculator.enter('p') // this will show a alert mensage
calculator.getHistoric() // this will show the historic of operations
calculator.reset() // this will reset all historic
~~~

