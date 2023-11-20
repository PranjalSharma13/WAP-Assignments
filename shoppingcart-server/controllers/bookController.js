const Book = require('../models/books');

exports.getAllBooks = (req,res)=>{
    res.json(Book.getAllBooks());
}

exports.getBookById = (req,res)=>{
    res.json(Book.getBookById(req.params.id));
}

exports.saveBook = (req,res) =>{
    const{title,isbn,publishedDate,author} = req.body;
    new Book(null,title,isbn,publishedDate,author).save();
    res.status(201).end();
}

exports.updateBookById = (req,res)=>{
    const{title,isbn,publishedDate,author} = req.body;
    const upBook = new Book(null,title,isbn,publishedDate,author);
    upBook.id = req.params.id;
    upBook.updateById(req.params.id);
    res.status(200).json(upBook);
}

exports.deleteById=(req,res)=>{
    Book.deleteById(req.params.id);
    res.status(200).end();
}