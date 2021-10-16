class Book {
    constructor(title, genre, author, isReaded, dateReaded) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isReaded = isReaded;
        this.dateReaded = new Date(dateReaded);
    }
}

class Booklist {
    constructor() {
        this.bookList = [];
        this.booksRead = [];
        this.booksNotRead = [];
        this.nextBookToRead = {};
        this.currentBook = {};
        this.lastBookRead = {};    
    }

    add(book){
        if (!(book instanceof Book)) throw 'is not a book'
        this.bookList = [...this.bookList,book]
        this.organize()
    }

    organize() {
        this.booksRead = this.bookList.filter(book => book.isReaded === true).sort((a, b) => b.dateReaded - a.dateReaded);
        this.booksNotRead = this.bookList.filter(book => book.isReaded === false);
    }

    getCurrent(){
        this.currentBook = this.booksNotRead[0]
        return this.currentBook? this.currentBook : 'no have a current book'
    }

    getNext(){
        this.nextBookToRead = this.booksNotRead[1]
        return this.nextBookToRead? this.nextBookToRead : 'no have next book'
    }

    getLast(){
        this.lastBookRead = this.booksRead[this.booksRead.length-1]
        return this.lastBookRead? this.lastBookRead : 'no have last book'
    }

    searchIndex(){
        return this.bookList.indexOf(this.currentBook)
    }

    finishCurrentBook () {
        this.getCurrent()
        if(!this.currentBook)throw 'No have a current Book'
        this.bookList[this.searchIndex()].isReaded = true
        this.bookList[this.searchIndex()].dateReaded = new Date();
        this.organize()
        this.getCurrent()
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
