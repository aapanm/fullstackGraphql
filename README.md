# Fullstack Graphql

Welcome to the documentation for a fullstack graphql porject built with react, node (express) and apollo. This documentation will guide you through the process of installing and running this project from its Git repository.

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your system:

- Node.js
- Git

## Installation

To install and set up the project on your local machine, follow these steps:

1. Clone the Git repository using the following command:

   ```bash
   git clone https://github.com/aapanm/fullstackGraphql
   ```

2. Change to the project directory:

   ```bash
   cd fullStackGraphql
   ```

Here, you will see two folders. 1. Client, which consists all react codes for frontend and 2. Server, containing serverside code.

## Server side documentation

To navigate to the server folder run:

```bash
cd server
```

Install the server dependencies by running:

```bash
npm install
```

### Running the Project

Once you have completed the installation and configuration steps, you can run the project using the following command:

```bash
npm start
```

To, start the watch mode or development mode run following:

```bash
npm run dev
```

This command will start the Node.js server and make your application available at a specific address (e.g., `http://localhost:8000`).
Please refer to the project's documentation or code comments for more information on how to access and use the application.

## Testing

To run the project's tests, open another terminal and use the following command:

```bash
npm test
```

make sure, your server is running.

if above command show any error try insatlling Mocha as global dependency with following command:

```bash
npm install -g mocha
```

and then change test script to

```bash
"test": "mocha test tests/*.spec.js --timeout 10000",
```

<!-- It will output something like this:

![test](docs/test.png) -->

This will execute the defined test cases and provide the test results.

Following links provide more insights about the project:

1. [Database Information](docs/dbDoc.md)
2. [Api Documnetation](docs/apiDoc.md)
3. [Test Documentation](docs/unit.md)
