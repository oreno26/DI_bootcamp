-- CREATE TABLE EMPLOYEE(
--      EmpCode      INTEGER PRIMARY KEY,
--      EmpFName     VARCHAR(15) NOT NULL,
--      EmpLName     VARCHAR(15) NOT NULL,
--      Job          VARCHAR(45),
--      Manager      CHAR(4),
--      HireDate     DATE,
--      Salary       DECIMAL DEFAULT 0,
--      Commission   INTEGER,
--      Department_code INTEGER REFERENCES DEPARTMENT (DEPTCODE)
--   );
-- CREATE TABLE DEPARTMENT (
--   DEPTCODE INTEGER NOT NULL DEFAULT nextval('deptcode') PRIMARY KEY,
--   DeptName CHAR(30),
--   LOCATION VARCHAR(33) UNIQUE
-- ); 

-- 	How many employees are in dept 10. 3
-- SELECT COUNT(*) FROM EMPLOYEE where Department_code = 10

-- How many employees are analyst in dept 10. 1
-- SELECT COUNT(*) FROM EMPLOYEE where Department_code = 10 and Job = 'ANALYST'

-- Display the names of each employees, their job and dept location
-- SELECT Job, EmpFName, EmpLName, LOCATION
-- FROM EMPLOYEE
-- INNER JOIN DEPARTMENT
-- ON DEPARTMENT.DEPTCODE = EMPLOYEE.Department_code

-- create a query that displays EMPFNAME, EMPLNAME, Department_code, DEPTNAME, LOCATION from EMPLOYEE, and DEPARTMENT tables. 
-- Make sure the results are in the ascending order based on the EMPFNAME and LOCATION of the department.

-- SELECT Job, EmpFName, EmpLName,Department_code, DEPTNAME, LOCATION
-- FROM EMPLOYEE
-- INNER JOIN DEPARTMENT
-- ON DEPARTMENT.DEPTCODE = EMPLOYEE.Department_code
-- ORDER BY LOCATION

-- Display EMPFNAME and "TOTAL SALARY" for each employee (commission and salary)
-- SELECT  EmpFName, SUM(Salary + Commission)AS total_salary FROM EMPLOYEE
-- GROUP BY EmpFName
-- Display MAX SALARY from the EMPLOYEE table. 7000
-- SELECT MAX(Salary) FROM EMPLOYEE 
-- Find the avg salary of the software engineer
-- SELECT round(AVG(Salary),2) FROM EMPLOYEE WHERE Job = 'SOFTWARE ENGINEER'


 

