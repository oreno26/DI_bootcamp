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

-- All items, ordered by price (lowest to highest).
-- SELECT * FROM items ORDER BY item_price ASC
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items WHERE item_price >= 80 ORDER BY item_price DESC 
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- SELECT first_namt, last_lane FROM customers ORDER BY first_namt ASC LIMIT 3
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT  last_lane FROM customers ORDER BY last_lane DESC 