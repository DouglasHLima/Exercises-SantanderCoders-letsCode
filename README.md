#  COURSE EXERCISES WEB FULLSTACK SANTANDER CODERS - LETS CODE :

## Table of Contents
nº | Exercise
-- | ------
1  | [can go to the matrix](#exercise1)
2  | [voters](#exercise2)
3  | [Calculator](#exercise3)
4  | [Specialist classes of Calculator](#exercise4)
5  | [class Trainning](#exercise5)
6  | [The Reading List](#exercise6)
7  | [The User List](#exercise7)
8  | [Dinamic Modal in JS](#exercise8)

## <a id="exercise1"></a>*Exercise 1:*
### [**can go to the matrix:**](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/tree/main/can-go-to-the-matrix)

create a series of name strings saying whether or not they can go to The Matrix >= 18 years old

input object:
~~~js
[ 
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
~~~

expected output:
~~~js
0: "Angelina Jolie can go to The Matrix"
1: "Eric Jones is under age"
2: "Paris Hilton is under age"
3: "Kayne West is under age"
4: "Bob Ziroll can go to The Matrix"
~~~


## <a id="exercise2"></a>*Exercise 2:*
### [**voters**](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/tree/main/voters)
Given a number of potential voters, return an object that represents the voting results.
include how many potential voters were between 18 and 25, how many were 26 to 35, how many were 36 to 55, and how many from each of these age groups actually voted. And return an object resulting from these properties.

input:
~~~js
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


## <a id="exercise3"></a>*Exercise 3:*
### [**Calculator**](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/tree/main/sample-calculator)
Create a calculator module with:
- "enter" function
- "equals" function
- "list" function which shows all operations already performed on the calculator, followed by their results
- "reset" function

sugestion test:
~~~js
calculator.enter(10)
calculator.enter('+') // can also be '-', '*', '/'
calculator.enter(55)
calculator.equals()

calculator.enter('p') // this will show a alert mensage
calculator.getHistoric() // this will show the historic of operations
calculator.reset() // this will reset all historic
~~~

## <a id="exercise4"></a>*Exercise 4:*
### [Specialist classes of Calculator](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/tree/main/specialist-class-for-calculator)
A sample class to testing inheritance and polymorphism
- Create a class of functions: list, enter, equals, reset.
- the classes that inherit it should implement these functions and must be experts in a specific operation,
such as:
- sum, 
- subtraction, 
- division, 
- multiplication

sugestion test:
~~~js
const sum = new CalculatorSum // this will create a instante of specialist class for sum operations
const subtract = new CalculatorSubtraction
const divide = new CalculatorDivide
const multiply = new CalculatorMultiply

sum.enter(10) //repeat these steps with the other constants
sum.enter(20)
sum.enter(30)
sum.equals()   //this will show a result of operation
sum.list()     //this will show the historic
sum.reset()    //this will clear the historic
~~~

## <a id="exercise5"></a>*Exercise 5:*
### [Training classes](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/blob/main/ClassTraining/ClassTraining.js)

Create classes: Person and subclasses Teacher and Student


Person must have: |Teacher must have |Student must have
------------------|------------------|------------------------
name              | name             | name
Age               | Age              | Age
Gender            | Gender           | Gender
Interests         | interests        | Interests
Bio               | Bio              | Bio
...               | Subject          | Greeting
...               | Greeting         | ...



## <a id="exercise6"></a>*Exercise 6:*
### [The Reading List](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/blob/main/BookList/Book-list.js)
this exercise was taken from (gSchool)[https://github.com/gSchool/JS-Intro-OOP-Exercises]
_An object-oriented book-list!_

*   Create a class `BookList`
*   Create another class called `Book`

*   **BookLists** should have the following properties:
	*   Number of books marked as read
	*   Number of books marked not read yet
	*   A reference to the next book to read (book object)
	*   A reference to the current book being read (book object)
	*   A reference to the last book read (book object)
	*   An array of all the Books
*   Each **Book** should have several properties:
	*   Title
	*  Genre
	*  Author
	*   Read (true or false)
	*   Read date, can be blank, otherwise needs to be a [JS Date() object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
*   Every **Booklist** should have a few methods: 
	* .add(book)
		* should add a **book** to the books list.
	*   .finishCurrentBook()
		*   should mark the **book** that is currently being read as "read"
		*   Give it a read date of new Date(Date.now())
		*   Change the last **book** read to be the book that just got finished
		*   Change the current **book** to be the next book to be read
		*   Change the next **book** to be read property to be the first unread book you find in the list of books

*   **Booklists** and **Books** might need more methods than that. Try to think of more that might be useful.

sugestion test:
~~~js
// define books
const livro1 = new Book('Legião estrangeira','infanto-juvenil','agatha Cristie', false)
const livro2 = new Book('1984','ficção','George Owell', false)
const livro3 = new Book('O mistério dos morros Dourados','infanto-juvenil','francisco marins', false)
const livro4 = new Book('As crônicas de Narnia','infanto-juvenil','C.S. Lewis', false)
//create booklist
const bookList = new Booklist()
//adding books
bookList.add(livro1)
bookList.add(livro2)
bookList.add(livro3)
bookList.add(livro4)
//testing methods
bookList.finishCurrentBook();
bookList.booksRead;
bookList.booksNotRead;
bookList.finishCurrentBook();
bookList.currentBook;
bookList.nextBookToRead;
bookList.lastBookRead;
~~~

## <a id="exercise7"></a>*Exercise 7:*
### [The Users List](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/tree/main/user-list)

create a list of users using JS and DOM to manipulate the registration of new users and the removal of these

sugestion test:
~~~js
//download the project and open index.html file
//add users and submit
//remove the users on button remove
~~~


## <a id="exercise8"></a>*Exercise 8:*
### [Dinamic Modal in js](https://github.com/DouglasHLima/Exercises-SantanderCoders-letsCode/tree/main/modal)

create a modal that receives and performs high-order functions. 
The modal receives an object as a settings parameter and operates visibility with stylization in css.
The modal receives an object that configures the inputs and texts that will be displayed dynamically, and also an object with functions that will execute in success or failure of submit.

configuration objects:
~~~js
const settings = [
    {labelName:'Nome', element: 'input', type:'name', placeholder: 'Insira o primeiro nome', required: true},
    {labelName:'Sobrenome', element: 'input', type:'lastname', placeholder: 'sobrenome', required: false},
    {labelName:'Email', element: 'input', type:'email', placeholder:'Insira seu Email', required: true},
    {labelName:'Resumo', element: 'input', type:'textarea', placeholder:'uma breve descrição', required: false}
]

const callbackfn = {
    sucess: value => {console.log('enviando os dados: ',value)},
    fail: () => console.log('cliente cancelou')
}
~~~


