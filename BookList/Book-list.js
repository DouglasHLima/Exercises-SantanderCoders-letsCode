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
        if (book instanceof Book === 'Book') throw 'is not a book'
        this.booklist= [...bookList,book]
        organize()
    }

    organize() {
        this.booksRead = this.list.filter(book => book.isRead === true);
        this.booksNotRead = this.list.filter(book => book.isRead === false);
        this.booksRead = this.booksRead.sort((a, b) => b.dateReaded - a.dateReaded)
    }

    getCurrent(){
        this.currentBook = this.booksNotRead[0]
    }

    getNext(){
        this.nextBookToRead = this.booksNotRead[1]
    }

    getLast(){
        this.lastBookRead = this.booksRead[this.booksRead-1]
    }

    finishCurrentBook () {
        for (current in bookList){
            if (this.currentBook === bookList[current]){
                booklist[current].isRead = true
                organize()
                getCurrent()
                getNext() 
                getLast() 
                
            }
        }   
    }
}