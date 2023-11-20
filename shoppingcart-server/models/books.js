let books = [{
        id:1,
        title:'The Da Vinci Code',
        isbn:'9780307277671',
        publishedDate:'2003-01-01',
        author:'Dan Brown'
}, {
    id:2,
    title:'Angels and Demons',
    isbn:'9780307277671',
    publishedDate:'2003-01-01',
    author:'Dan Brown'
}
];
let counter = 3;

module.exports = class Book {

    constructor(id,title,isbn,publishedDate,author){
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate=publishedDate;
        this.author = author;
    }
    static getAllBooks(){
        return books;
    }

    static getBookById(id){
        return books.find(b=>b.id==id);
    }

    save() {
        this.id = counter++;
        books.push(this);
        
    }

    updateById(id){
        const index = books.findIndex(b=>b.id == id);
        if(index>-1){
            books[index]=this;
        }
        else{
            throw new Error(`Cannot find Book with ${id} in the database`);
        }
    }

    static deleteById(id){
        const index = books.findIndex(b=>b.id == id);
        if(index>-1){
            books.splice(index,1);
        }
        else{
            throw new Error(`Cannot find Book with ${id} in the database`);
        }
    }

}