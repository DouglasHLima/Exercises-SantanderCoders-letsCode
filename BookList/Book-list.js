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
        this.booksRead = this.bookList.filter(book => book.isRead === true);
        this.booksNotRead = this.bookList.filter(book => book.isRead === false);
        this.booksRead = this.booksRead.sort((a, b) => b.dateReaded - a.dateReaded)
    }

    getCurrent(){
        this.currentBook = this.booksNotRead[0]
    }

    getNext(){
        this.nextBookToRead = this.booksNotRead[1]
    }

    getLast(){
        this.lastBookRead = this.booksRead[this.booksRead.length-1]
    }

    finishCurrentBook () {
        for (let current in this.bookList){
            if (this.currentBook === this.bookList[current]){
                this.booklist[current].isRead = true
                this.organize()
                this.getCurrent()
                this.getNext() 
                this.getLast() 
                
            }
        }   
    }
}

const livro1 = new Book('Legião estrangeira','infanto-juvenil','agatha Cristie', false)
const livro2 = new Book('')
const booklist = new Booklist()
booklist.add(livro1)