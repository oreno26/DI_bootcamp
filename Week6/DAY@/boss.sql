-- Database: company

-- DROP DATABASE IF EXISTS company;

-- CREATE DATABASE company
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
-- SELECT *FROM DEPARTMENT
-- 1. Create a Boss table with the columns boss_id, boss_name, boss_type (ie.nice, angry, funny ect...),
-- and dept_number:-- The boss table,has a one to one relationship with the department table:-- 
-- => a department can be managed by only 1 boss, and a boss can manage only 1 department
-- CREATE TABLE Boss (
--   boss_id SERIAL PRIMARY KEY,
-- 	boss_name VARCHAR(30) NOT NULL,
-- 	boss_type VARCHAR(30) NOT NULL,
-- 	dept_number INTEGER UNIQUE REFERENCES DEPARTMENT (DEPTCODE)
-- )

-- SELECT * FROM Boss
-- 2. Add a few bosses : one for the finance dept, one for sales and one for marketing--
-- INSERT INTO Boss (boss_name, boss_type, dept_number)
-- VALUES
-- ('jill', 'mad', (SELECT DEPTCODE FROM DEPARTMENT WHERE DEPTNAME ='SOFTWARE' )),
-- ('bill', 'sad', (SELECT DEPTCODE FROM DEPARTMENT WHERE DEPTNAME ='SALES' )),
-- ('frank', 'glad', (SELECT DEPTCODE FROM DEPARTMENT WHERE DEPTNAME ='MARKETING' )),
-- ('avril', 'wears plaid', (SELECT DEPTCODE FROM DEPARTMENT WHERE DEPTNAME ='ADMIN' ))

-- 3. What is the type and name of the boss of the dept Finance (show the dept name, not the dept id)

SELECT boss_name, boss_type, DEPTNAME
FROM Boss
inner join DEPARTMENT
on Boss.dept_number = DEPARTMENT.DEPTCODE
WHERE DEPTNAME = 'FINANCE'










