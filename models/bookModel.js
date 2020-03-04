const db = require('./conn');

class BookDB {
    constructor(title, author, discription, isbn, number_of_pages){
        this.title = title;
        this.author = author;
        this.discription = discription;
        this.isbn = isbn;
        this.number_of_pages = number_of_pages;
    }

    static async getAllBooks(){
        try {
            const response = await db.any(`SELECT * FROM books;`);
            return response;
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    static async getBook(id){
        try {
            const response = await db.any(`SELECT * FROM books WHERE id = ${id}`);
            return response;
        } catch (err) {
            console.error(err);
            return err;
        }
    }
    static async getReviews(book_id){
        try {
            const response = await db.any(`SELECT * FROM review WHERE book_id = ${book_id}`);
            return response;
        } catch (err) {
            return err;
        }
    }

    static async postBookReview(book_id, review_title, review){
        try {
            const response = await db.one(`INSERT INTO review (review_title, review, book_id, user_id)
            VALUES ($1, $2, $3, $4);`,[review_title, review, book_id, 1])
            return response;
        }catch(err){
            return err;
        }
    }
}

module.exports = BookDB;