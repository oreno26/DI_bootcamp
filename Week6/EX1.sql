-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


-- Create a database called public.
-- Add two tables:
-- items
-- customers.

-- CREATE TABLE items(
-- item_id SERIAL PRIMARY KEY,
-- 	item_name VARCHAR(50) NOT NULL,
-- 	item_price SMALLINT NOT NULL
-- );

-- CREATE TABLE customers (
-- customer_id SERIAL PRIMARY KEY,
-- first_namt VARCHAR(50) NOT NULL,
-- last_lane VARCHAR(50) NOT NULL
-- )

-- INSERT INTO items (item_name, item_price)
-- VALUES
-- ('small desk', 100),
-- ('Large desk', 300),
-- ('fan', 80)

-- INSERT INTO customers (first_namt, last_lane)
-- VALUES
-- ('Greg','Jones'),
-- ('Sandra','Jones'),
-- ('Scott','Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie','Johonson')

-- All the items.
-- SElect * from customers

-- All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE item_price > 80
-- All the items with a price below 300. (300 inclu
-- SELECT * FROM items WHERE item_price <300
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers WHERE last_lane = 'Smith'
-- All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE last_lane = 'Jones'
-- All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE last_lane != 'Scott'




