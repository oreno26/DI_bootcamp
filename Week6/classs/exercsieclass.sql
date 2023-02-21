-- Database: CITYS

-- DROP DATABASE IF EXISTS "CITYS";

-- CREATE DATABASE "CITYS"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;




-- SELECT * FROM city_info

---


-- 1. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
-- SELECT ROUND(AVG(dust), 3) FROM city_info WHERE city = 'Boston' AND DATE(event_datetime) BETWEEN '2015-03-01' and '2015-03-05'
-- 2. How many rows does the table have about the city "San Francisco" ?
-- SELECT COUNT(*) FROM city_info WHERE city = 'San Francisco'
-- 3. How many rows per city does the table have ?
-- SELECT city, COUNT(*) FROM city_info GROUP BY city
-- 4. Where and when (only hour) it's the noisiest in the world?
SELECT city,sound, EXTRACT(HOUR FROM event_datetime) from city_info
WHERE sound=(SELECT MAX(sound)FROM city_info) 

