-- 1. Select the code which produces this table
--  ============================
--  | name	      | population |
--  ----------------------------
--  | Bahrain	    | 1234571    |
--  | Swaziland	  | 1220000    |
--  | Timor-Leste | 1066409    |
--  ============================

SELECT name, population
FROM world
WHERE population BETWEEN 1000000 AND 1250000;

-- 2. Pick the result you would obtain from this code:
SELECT name, population
FROM world
WHERE name LIKE "Al%"

--  =========================
--  | name	   | population |
--  -------------------------
--  | Albania	 | 3200000    |
--  | Algeria	 | 32900000   |
--  =========================

-- 3. Select the code which shows the countries that end in A or L
SELECT name
FROM world
WHERE name LIKE '%a' OR name LIKE '%l';

-- 4. Pick the result from the query
SELECT name, length(name)
FROM world
WHERE length(name)=5 AND region='Europe';

--  =========================
--  | name	 | length(name) |
--  -------------------------
--  | Italy	 | 5            |
--  | Malta	 | 5            |
--  | Spain	 | 5            |
--  =========================
