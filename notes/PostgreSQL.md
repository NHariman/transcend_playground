# PostgreSQL

Postgres is a relational database, meaning it leverages relational algebra, unlike non-relational databases.

This language allows you to change items in a database through keys.

### Useful links
- video info [link](https://www.youtube.com/watch?v=zw4s3Ey8ayo)
- Postico 2, native mac app for postgres: [link](https://eggerapps.at/postico2/) for pc users: pgAdmin
- installing postgres [link](https://www.postgresql.org/download/macosx/)

## Basics

**Capitalisation in SQL, naming conventions in SQL**
- Uppercase keywords, and anything that relates to the table itself is lowercase snakecase as SQL does not care about casing. So anything lowercase is user defined, while uppercase is something built into SQL.
This is also why you can't create a table called `table` or `user` as those are keywords in SQL too. However, if you wrap it in double quotes it does work ie. `"user"`.
- Tables should be named singular.
- single quotes for strings
- double quotes for referencing tables and columns



### Tables
Containers for data, like a spreadsheet
- made up of columns and rows
- columns are named and can place constraints on rows (entities).

### Setting up a table
Postico was used during the video to interact with SQL.
Schema = how a database is laid out.
Using the `CREATE TABLE name_of_table` key, you can specify columns.
```sql
CREATE TABLE table_name (
	column DATA_TYPE,
	column DATA_TYPE
);
```
```sql
-- comments are done like this
-- column definition is: column_name TYPE_OF_DATA
CREATE TABLE profile (
	id SERIAL PRIMARY KEY, -- special type that sets up additional things, it's an INT that automatically adds +1 for every new entity. Most of the time the id column should NEVER be edited yourself, the database should control it. PRIMARY KEY is the key used to represent each row in the database, meaning it's unique.
	name VARCHAR(255), -- VARCHAR(255) = text column with constraint on size, so it can't be very long, upper bound is 255.
	email VARCHAR(255),
	password TEXT, -- plain text, for applications you'll be hashing pw and those can get quite long so it's better to not restrict this.
	age INT -- must be number
);

-- there are many types of column types, they can be looked up via google
```

### Inserting into tables
You only have to specify column data that *isn't* of type SERIAL
```sql
INSERT INTO table_name (columns_separated_by_commas) VALUES(data_to_insert);
```
```sql
-- format: INSERT INTO table_name (column, names, here) VALUES (data, data, data);

INSERT INTO "user" (email, name, age, password) VALUES('test@gmail.com', 'Niks', 27, 'adfadflkahdfsaflhd'); 
-- the single quotes indicate to SQL that text is being provided.
-- double quotes are used for referencing columns and tables
```

### SELECT
`SELECT` is a keyword that allows us to fetch information from an existing table.
```
SELECT columns FROM table_name;

OPTIONAL: USING WHERE
SELECT column FROM table_name WHERE condition;
```
```sql
-- views all columns from the table called user.
SELECT * FROM "user";
-- * means all, it can be replaced with singular or multiple columns
SELECT id, name FROM "user";
-- WHERE as condition, like an if statement for rows data.
SELECT * FROM "user" WHERE name = 'Troy';
SELECT * FROM "user" WHERE age > 27;
```

### Changing data in the table (UPDATE and SET)
`UPDATE` and `SET` are used for updating tables. WARNING! ALWAYS USE A WHERE! OR YOU WILL UPDATE THE ENTIRE DATABASE.
style:
```
UPDATE table_name SET what_to_set WHERE location
```
```sql
-- UPDATE query: UPDATE table_name SET what_to_set WHERE location
UPDATE "user" SET age = 30 WHERE id = 1;
UPDATE "user" SET email = 'testdfkdhfa' WHERE id = 1;
-- WARNING! ALWAYS USE A WHERE! OR YOU WILL UPDATE THE ENTIRE DATABASE.

-- the equal operator changes based on use. ie. WHERE = is used to search for equivalence, while SET = is used to assign
```

### DELETE an entry
`DELETE` is used. WARNING! ALWAYS USE IN COMBINATION WITH WHERE, OR THE ENTIRE COLUMN DISAPPEARS.
Style:
```SQL
DELETE FROM table_name WHERE condition;
```
```sql
DELETE FROM "user" WHERE id = 2;
```

## Table relationships
Tables relate to other tables, this allows for entities to relate to one another. There are 3 types of basic relationships:
- One - One
- One - Many
- Many - Many

### Foreign keys
Foreign keys allow us to reference specific entities in another table from a table.
