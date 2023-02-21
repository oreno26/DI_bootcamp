-- Database: day3

-- DROP DATABASE IF EXISTS day3;

-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)




CREATE TABLE Customer(
    customer_id  SERIAL PRIMARY KEY,
    first_name VARCHAR(15) NOT NULL,
	last_name VARCHAR(15) NOT NULL
)

CREATE TABLE Customer_profile(
     profile_id SERIAL PRIMARY KEY,
     isLoggedIn BOOLEAN DEFAULT FALSE,
	 FOREIGN KEY(profile_id)
	 REFERENCES Customer(customer_id) 
)
SELECT * FROM customer_profile
John, Doe
Jerome, Lalu
Lea, Rive

-- INSERT INTO  Customer 
-- VALUES 
-- (DEFAULT, 'John', 'Doe'),
-- (DEFAULT, 'Jerome', 'Ralu'),
-- (DEFAULT, 'lea', 'Rive')


-- John is loggedIn
-- Jerome is not logged in

-- INSERT INTO Customer_profile
-- VALUES
-- ((SELECT customer_id FROM Customer WHERE first_name = 'John'), true),
-- ((SELECT customer_id FROM Customer WHERE first_name = 'Jerome'),false)
-- Returning *



-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
SELECT first_name
FROM customer c
LEFT JOIN customer_profile cp
ON c.customer_id = cp.profile_id
WHERE isLoggedIN = true
-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT first_name, isLoggedIn
FROM customer c 
LEFT JOIN customer_profile cp
ON c.customer_id = cp.profile_id

-- The number of customers that are not LoggedIn
SELECT COUNT(isLoggedin) FROM customer_profile WHERE isloggein = false

Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

CREATE TABLE Book(
    book_id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	author VARCHAR(50) NOT NULL
)

INSERT INTO Book
VALUES 
(DEFAULT, 'Alice In Wonderland','Lewis Carroll'),
(DEFAULT, 'Harry Potter','J.K Rowling'),
(DEFAULT, 'To kill a mockingbird','Harper Lee')


Create a table named Student, with the columns : 
student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);

CREATE TABLE student (
 student_id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE,
	age SMALLINT CHECK (age <= 15) 
)

John, 12
Lera, 11
Patrick, 10
Bob, 14

INSERT INTO student
values 
(DEFAULT, 'John', 12),
(DEFAULT,'Lera',11),
(DEFAULT,'Patrick',10),
(DEFAULT, 'Bob', 14)

Create a table named Library, with the columns :
book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
student_id ON DELETE CASCADE ON UPDATE CASCADE
borrowed_date




-- This table, is a junction table for a Many to Many relationship with the Book and Student tables 
-- : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

CREATE TABLE Library(
    book_fk_id intEGER NOT NULL REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_fk_id intEGER NOT NULL REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date date,
	primary key (book_fk_id, student_fk_id )
)

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

insert into library
values
((SELECT book_id from book where title ='Alice In Wonderland'),(SELECT student_id from student where name = 'John'), '2022-02-15')
((SELECT book_id FROM book where title ='To kill a mockingbird'),(SELECT student_id FROM student where name ='Bob'),'2021-03-03'),
((SELECT book_id FROM book where title ='Alice In Wonderland'),(SELECT student_id FROM student where name ='Lera'),'2021-05-23'),
((SELECT book_id FROM book where title ='Harry Potter'),(SELECT student_id FROM student where name='Bob'),'2021-08-12')

-- Select all the columns from the junction table
SELECT * FROM library
-- Select the name of the student and the title of the borrowed books
SELECT name, title 
FROM library l
JOIN book b
on l.book_fk_id = b.book_id
JOIN student s
on l.student_fk_id = s.student_id



Select the average age of the children, that borrowed the book Alice in Wonderland

SELECT avg(age) 
FROM library l
join book b
on l.book_fk_id = b.book_id
join student s
on l.student_fk_id = s.student_id


Delete a student from the Student table, what happened in the junction table ?

DELETE from student WHERE name = 'Bob'
-- it will be gone gone goennnnn
SELECT * FROM Library














































