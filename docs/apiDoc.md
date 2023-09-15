# Graphql Api Documentation

This section covers the API's written to communicate with the frontend. Table of contents are given below:

## Table of Contents

- [User Schema Query and Mutations](#user)
- [Product Schema Query and Mutations](#product)
- [Transaction Schema Query and Mutations](#transaction)

### User Schema Query and Mutations

#### Schema Definition for User

```graphql
scalar DateTime

type User {
  id: Int!
  name: String!
  address: String!
  email: String!
  phone: Int!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Query {
  signIn(email: String!, password: String!): User!
}

type Mutation {
  signUp(
    name: String!
    address: String!
    email: String!
    phone: Int!
    password: String!
  ): User!
}
```

#### Types

##### User Type

The `User` type represents a user entity in the system. It includes the following fields:

- **id**: A unique identifier for the user.
- **name**: The user's name.
- **address**: The user's address.
- **email**: The user's email address.
- **phone**: The user's phone number.
- **password**: The user's password.
- **createdAt**: The timestamp when the user account was created.
- **updatedAt**: The timestamp when the user account was last updated.

#### Queries

##### SignIn

The `signIn` query allows users to sign in by providing their email and password. On successful sign-in, it returns the user's information.

```javascript
signIn (email: String!, password: String!): User!
```

#### Mutations

##### SignUp

The `signUp` mutation enables users to create a new account by providing their name, address, email, phone number, and password. It returns the created user's information.

```javascript
signUp(
  name: String!
  address: String!
  email: String!
  phone: Int!
  password: String!
): User!

```

#### Example Usage

Here's an example of how to use this GraphQL API to sign up and sign in a user:

**url**: `localhost:8000/graphql`

```JSON
mutation {
  signUp(
    name: "mutsuddy"
    address: "Ctg"
    email: "a@b.com"
    phone: 1234567890
    password: "securepassword"
  ) {
    id
    name
    email
  }
}

# Sign in an existing user
query {
  signIn(email: "a@b.com", password: "securepassword") {
    id
    name
    email
    createdAt
  }
}
```

##### Response

**signUp responses**

**case: 1** If sign is successful

```json
{
  "data": {
    "signUp": {
    	"id": 1,
	"name": "mutsuddy"
	"email": "a@b.com"
    }
  }
}
```

**case: 1** Duplicate mail

```json
{
  "data": {},
  "errors": [
    {
      "message": "Failed to create user!, PrismaClientKnownRequestError:
	  \nInvalid `prisma.user.create()`
	  invocation:\n\n\nUnique constraint failed on the fields: (`email`)",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "signUp"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
      }
    }
  ]
}
```

**signIn responses**

**case 1:** If credential matches:

```json
{
  "data": {
    "signIn": {
      "id": 1,
      "name": "aapan",
      "email": "a@b.com"
    }
  }
}
```

**case 2:** If credentials do not match:

```json
{
  "data": {},
  "errors": [
    {
      "message": "Error: Credentials do not match!",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["signIn"],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR"
      }
    }
  ]
}
```

**case 3:** If user does not exist

```json
{
  "data": {},
  "errors": [
    {
      "message": "Error: Error: Cannot find user with given mail",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["signIn"],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR"
      }
    }
  ]
}
```
