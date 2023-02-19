-- Database: BOOTCAMP

-- DROP DATABASE IF EXISTS "BOOTCAMP";

-- CREATE DATABASE "BOOTCAMP"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students(
-- id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(50) NOT NULL,
-- birth_date DATE)

-- INSERT INTO students (first_name,last_name, birth_date)
-- VALUES 
-- ('Marc','Benichou', '1998-11-02'),
-- ('Yoan','Cohen', '2010-12-03'),
-- ('Lea','Benichou', '1987-07-27'),
-- ('Amelia','Dux', '1996-04-07'),
-- ('David','Grez', '2003-06-14'),
-- ('Omer','Simpson', '1980-10-03'),
-- ('Oren','Ovadia', '1993-10-26')

-- Fetch the student which id is equal to 2.Fetch the students whose last_names are Benichou OR first_names are Marc.
-- select * from students WHERE id = 2
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT * FROM students WHERE first_name = 'Benichou' OR last_name = 'Marc'
-- Fetch the students whose first_names contain the letter a.
--  select * from students WHERE first_name ILIKE '%a%'
-- Fetch the students whose first_names start with the letter a
-- select * from students WHERE first_name ILIKE 'a%'
-- Fetch the students whose first_names end with the letter a.
-- select * from students WHERE first_name ILIKE '%a'
-- Fetch the students whose second to last letter of their first_names are a
-- select * from students WHERE first_name ILIKE '%a_'
-- fetch the students whose id’s are equal to 1 AND 3 .
-- select * from students WHERE id =1 or id =3

select * from students where birth_date > 2000





