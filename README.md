# Questions and Answer

### Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

-Creating a model with an interface and schema in MongoDB, often with libraries like Mongoose, ensures data structure consistency by enforcing rules for fields' data types, validation, and defaults. This enhances data integrity, developer understanding, and compatibility with tools, simplifying database development and maintenance.

### Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

-Field filtering in MongoDB lets you control which fields are included or excluded in query results. To include specific fields, use the projection parameter with 1 for inclusion. To exclude, use 0. For example, {"name": 1, "age": 1} includes only name and age, while {"_id": 0} excludes the default _id field.

