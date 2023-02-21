-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
-- In the dvdrental database write a query to select all the columns from the “customer” table.
-- SELECT * FROM customer
-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
-- SELECT first_name|| ' ' ||last_name as fullname  FROM customer

-- Lets get all the dates that accounts were created. Write a query to select all the create_date 
-- from the “customer” table (there should be no duplicates).
-- SELECT DISTINCT create_date FROM customer 

-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
-- SELECT * FROM customer ORDER BY first_name DESC

-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
-- SELECT film_id, title, description, release_year, rental_rate FROM  film ORDER BY rental_rate ASC

-- Write a query to get the address, and the phone number of all customers living 
-- in the Texas district, these details can be found in the “address” table.
-- SELECT address, phone FROM  address WHERE district = 'Texas'

-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
-- SELECT * FROM film WHERE film_id = 15 OR film_id =150


-- Write a query which should check if your favorite movie exists in the database.
-- Have your query get the film ID, title, description, 
-- length and the rental rate, these details can be found in the “film” table.
-- SELECT * FROM film WHERE title ILIKE 'st%'

-- Write a query which will find the 10 cheapest movies.

-- SELECT * FROM film ORDER BY rental_rate asc limit 10

-- Write a query which will join the data in the customer table and the payment table. 
-- You want to get the first name and last name from the curstomer table, 
-- as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).

SELECT first_name, last_name,amount, payment_date 
FROM customer INNER JOIN payment
on customer.customer_id = payment.customer_id
order by customer.customer_id












