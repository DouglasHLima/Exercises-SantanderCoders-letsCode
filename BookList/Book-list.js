class Book {
    constructor(title, genre, author, isRead, dateRead) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
        this.dateRead = new Date(dateRead);
    }
}

class Booklist {
    constructor() {
        this.bookList = [];
        this.booksRead = [];
        this.booksNotRead = [];
        this.nextBookToRead = this.getNext();
        this._currentBook
        this.lastBookRead = this.getLast();    
    }

    add(book){
        if (!(book instanceof Book)) throw 'It is not a book'
        this.bookList = [...this.bookList,book]
    }

    organize() {
        this.booksRead = []
        this.booksNotRead = []
        this.booksRead = this.bookList.filter(
            (book) => {
                if (book.isRead === true) return book
                this.booksNotRead.push(book)
        }).sort((a, b) => b.dateRead - a.dateRead);
       }

    get currentBook(){   //retorna primeiro livro isRead false da lista
        for (let value of this.bookList){
            if(!value.isRead) return this._currentBook = value
            else this._currentBook = undefined
        }
        if (!this._currentBook) throw 'There is not a current book'
    }

    getNext(){  //retorna proximo livro do books not read
        this.organize()
        this.nextBookToRead = this.booksNotRead[1]
        return this.nextBookToRead? this.nextBookToRead : 'There is not a next book'
    }

    getLast(){   
        this.organize()
        this.lastBookRead = this.booksRead[this.booksRead.length-1]
        return this.lastBookRead? this.lastBookRead : 'There is not a last book'
    }

    // searchIndex(){
    //     return this.bookList.indexOf(this.currentBook)
    //}

    finishCurrentBook () {
        if(!this.currentBook)throw 'There is not a current book. Please, select a book to finish.'
        this.currentBook.dateRead = new Date();
        this.currentBook.isRead = true
        this.organize()
        this.getNext()
        this.getLast()
    }
}

const livro1 = new Book('Legião estrangeira','infanto-juvenil','agatha Cristie', false)
const livro2 = new Book('1984','ficção','George Owell', false)
const livro3 = new Book('O mistério dos morros Dourados','infanto-juvenil','francisco marins', false)
const livro4 = new Book('As crônicas de Narnia','infanto-juvenil','C.S. Lewis', false)
const booklist = new Booklist()
booklist.add(livro1)
booklist.add(livro2)
booklist.add(livro3)
booklist.add(livro4)
booklist.finishCurrentBook();

console.log(booklist.booksRead);