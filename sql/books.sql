CREATE DATABASE books;

\c books;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    author VARCHAR,
    discription VARCHAR,
    isbn INT,
    number_of_pages INT
    );

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR,
    email VARCHAR
);

CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    review_title VARCHAR,
    review VARCHAR,
    book_id INT REFERENCES books (id),
    user_id INT REFERENCES users (id)
    );

INSERT INTO books (title, author, discription, isbn, number_of_pages) 
VALUES (
    'To Kill a Mocking Bird', 'Harper Lee', 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize', 48933, 296
),
(
    'The Art of War', 'Sun Tzu', 'The Art of War is an ancient Chinese military treatise dating from the Late Spring and Autumn Period. The work, which is attributed to the ancient Chinese military strategist Sun Tzu, is composed of 13 chapters. Each one is devoted to an aspect of warfare and how it applies to military strategy and tactics.', 48594, 80
);

INSERT INTO users (user_name, email)
VALUES ('Zach', 'zach@gmail.com'),
('Ken', 'hotstuff@yahoo.com');

INSERT INTO review (review_title, review, book_id, user_id)
VALUES (
    'Magnificent', 'This is an Magnificent book.', 1, 1
),
(
    'Trash', 'I don''t understant how this is art or war', 2, 2
);
