/* - The Reading List -
    Objectives:
    Get comfortable creating a class with properties and methods
    Practice creating objects and methods that interact with one another
    Instance several objects that are contained within a special container object
    Encapsulate functionality within the proper class
    @Authors:  */

class Book {
    set dateRead(date){new Date(date)}
    
    constructor(title, genre, author, isRead) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
        this._dateRead;
    }
    read() {
        this.isRead = true
        this._dateRead = new Date()
    }
}

class Booklist {
    constructor() {
        this.bookList = [];  //An array of all the Books
        this._nextBookToRead = {};
        this._currentBook = {};
        this._lastBookRead = {};    
    }

    add(book){   //should add a book to the books list.
        if (!(book instanceof Book)) throw 'It is not a book'
        this.bookList = [...this.bookList,book]
    }
    finishCurrentBook () {  //hould mark the book that is currently being read as "read"
        this.currentBook.read()
    }
    get booksRead() { //Number of books marked as read
        
        return this.bookList.filter(book => book.isRead).length
    }
    get booksNotRead() { //Number of books marked not read yet
        return this.bookList.filter(book => !book.isRead).length
    }
    get currentBook(){  //A reference to the current book being read (book object)
        for (const book of this.bookList){
            if(!book.isRead) return this._currentBook = book
            else this._currentBook = undefined
        }
        if (!this._currentBook) throw 'There is not a current book'
    }
    get nextBookToRead(){  //A reference to the next book to read (book object)
        this._nextBookToRead = this.bookList[this.booksRead+1]
        return this._nextBookToRead? this._nextBookToRead :'There is not a next book'
    }
    get lastBookRead(){   //A reference to the last book read (book object)
        this._lastBookRead = this.bookList[this.booksRead-1]
        return this._lastBookRead? this._lastBookRead : 'There is not a last book'
    }
}


// comands for test

const livro1 = new Book('Legião estrangeira','infanto-juvenil','agatha Cristie', false)
const livro2 = new Book('1984','ficção','George Owell', false)
const livro3 = new Book('O mistério dos morros Dourados','infanto-juvenil','francisco marins', false)
const livro4 = new Book('As crônicas de Narnia','infanto-juvenil','C.S. Lewis', false)
const bookList = new Booklist()
bookList.add(livro1)
bookList.add(livro2)
bookList.add(livro3)
bookList.add(livro4)
bookList.finishCurrentBook();
bookList.booksRead;
bookList.booksNotRead;
bookList.finishCurrentBook();
bookList.currentBook;
bookList.nextBookToRead;
bookList.lastBookRead;