import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-green-50 text-black rounded my-5 p-4">
        <h1 className="font-bold mb-2">
        What is an access token and refresh token? How do they work and where should we store them on the client-side?
        </h1>
        <p>
        Access tokens are typically used to access resources that are not sensitive, such as public data or user-profile information. Access tokens and refresh tokens are used to authenticate users and access protected resources.  A refresh token is a long-lived, high-scope credential that can be used to obtain new access tokens. Refresh tokens are typically used to access resources that are sensitive, such as private data or user-account information.
An access token is a short-lived, limited-scope credential that is used to access protected resources.
        </p>
      </div>

      <div className="bg-green-50 text-black rounded my-5 p-4">
        <h1 className="font-bold mb-2">
        Compare SQL and NoSQL databases?
        </h1>
        <p>
        SQL databases use a structured query language  to store and retrieve data. SQL databases are relational databases, while NoSQL databases are non-relational databases. SQL and NoSQL databases are two different types of databases that store and retrieve data.
SQL is a standard language that is used by most relational databases. NoSQL databases do not use SQL. Instead, they use different data models to store and retrieve data. SQL databases are typically used for applications that require complex queries and transaction management.
        </p>
      </div>

      <div className="bg-green-50 text-black rounded my-5 p-4">
        <h1 className="font-bold mb-2">
        What is express js? What is Nest JS?
        </h1>
        <p>
        Nest.js is a framework that create on top of Express.js and gives a more opinionated and structured approach to building web Softtwers. It uses TypeScript, which is a typed superset of JavaScript, and it provides a number of features that make it easier to build scalable and maintainable web applications.

Express.js is a base and flexible Node.js web application framework that provides a strong set of features for building web applications. It is designed to be simple to use and learn, and it is used by a wide range of developers to build everything from simple websites to complex web applications.
        </p>
      </div>

      <div className="bg-green-50 text-black rounded my-5 p-4">
        <h1 className="font-bold mb-2">
        What is MongoDB aggregate and how does it work?

        </h1>
        <p>
        MongoDB entirety is a feature that allows you to perform hard operations on data stored in MongoDB collections. 
Each stage performs an operation on the input documents, and the documents that are output from a stage are passed to the next stage. Aggregate operations are performed using a pipeline, which is a sequence of stages that process documents. 
The following are some of the most common aggregate operations:

$match: This stage filters documents based on a condition.
$group: This stage groups documents together based on a value.
$project: This stage projects fields from documents.
$sort: This stage sorts documents.
$limit: This stage limits the number of documents returned.
        </p>
      </div>
    </div>
  );
};

export default Blog;
