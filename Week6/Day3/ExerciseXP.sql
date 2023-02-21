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
	
-- 	Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
--  address ID 

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking? yes east step
-- DROP TABLE customer_review

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet) 183
-- SELECT * FROM rental WHERE return_date is null

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT title, return_date, replacement_cost
FROM inventory
INNER JOIN rental
on inventory.inventory_id = rental.inventory_id 
INNER JOIN film
on inventory.film_id = film.film_id
WHERE return_date is null 
ORDER BY replacement_cost DESC
limit 30

-- Your friend is at the store, and decides to rent a movie. 
-- He knows he wants to see 4 movies, but he can’t remember their names.
-- Can you help him find which movies he wants to rent?

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe. film
-- SELECT title , first_name, last_name, description
-- FROM film
-- INNER JOIN film_actor
-- ON film.film_id = film_actor.film_id
-- INNER JOIN actor
-- ON film_actor.actor_id = actor.actor_id
-- WHERE last_name ='Monroe' AND first_name = 'Penelope' AND description ILIKE '%sumo%' 
-- SELECT length FROM FILM
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT title , rating, length, name, description
-- FROM film
-- INNER JOIN film_category
-- ON film.film_id = film_category.film_id
-- INNER JOIN category
-- ON film_category.category_id = category.category_id 
-- WHERE rating = 'R' AND length < 60 

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.
-- SELECT title, return_date, first_name,last_name, rental_rate
-- FROM film
-- INNER JOIN inventory
-- ON film.film_id = inventory.film_id
-- INNER JOIN rental
-- ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN customer
-- ON rental.customer_id = customer.customer_id
-- WHERE first_name ='Matthew' AND last_name = 'Mahan' AND return_date BETWEEN '2005-07-28' and '2005-08-01'  and rental_rate >4

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description,
-- and it looked like it was a very expensive DVD to replace.
SELECT title, first_name, last_name,replacement_cost,description
FROM film  f
INNER JOIN inventory i
ON f.film_id = i.film_id
INNER JOIN rental
ON i.inventory_id = rental.inventory_id
INNER JOIN customer c
ON rental.customer_id = c.customer_id
WHERE first_name = 'Matthew' AND last_name ='Mahan' 
AND description ILIKE '%boat%' OR title ILIKE '%boat%'
order by replacement_cost DESC





















































































