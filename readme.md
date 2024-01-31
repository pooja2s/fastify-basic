# Fastify Crash Course API
https://fastify.dev/docs

In this tutorial We have creates a simple RESTful API using the fastify framework for Node.js.

The tutorial unfolds in a systematic progression, beginning with an introduction to the topic. Subsequently, it guides users through the installation and setup processes, ensuring a smooth initiation into the subject matter. Building upon this foundation, the tutorial covers the creation of a basic server and the establishment of a fundamental route. The integration of the VSCode REST Client is then demonstrated, providing users with valuable insights into efficient development practices. The utilization of a data file is introduced, followed by the organization of routes into separate files for improved code structuring. The tutorial delves into advanced topics such as options, validation schemas, and handlers, providing a comprehensive understanding of these essential components. Additionally, the creation of a controller is explored, offering a structured approach to handling server logic. The incorporation of Fastify Swagger API documentation enhances the project's documentation capabilities. Specific functionalities are addressed, including adding an item through a POST request and implementing body validation. The tutorial concludes by illustrating the process of removing an item using a DELETE request, ensuring a well-rounded exploration of Fastify server setup and development practices.

-----------------------------------------------------------------------------

### Quick start

- npm install fastify
- npm i @fastify/swagger 
- npm i nodemon  -D (for development)
- npm i uuid v4 (for generating unique ids)


const fastify = require('fastify')({ logger: true }) // Create a new instance of Fastify with some config options.

The code is divided into several sections, each section represents a different part of the API:

- `server.js`: This file contains the main entry point of our application and initializes the
Fastify instance. It also includes some basic configuration settings such as logging level and connection to the
Fastify instance along with its configuration options. It also includes the routes that will be used by
the API.
- `controller`: Contains the business logic of our resources. 
- `router`: Defines how the URLs are mapped to the handlers in the controller.
- `text.http`: Swagger documentation file.
- `items.js`: Contains Json.

-----------------------------------------------------------------------------

## Usage

- npm install
- npm run dev

-----------------------------------------------------------------------------

### Swagger docs

Swagger UI includes a development server that provides hot module reloading and unminified stack traces, for easier development.

To view your swagger documentation you can visit [http://localhost:5000/docs] in your browser or use a tool like Insom
nia (https://insomnia.rest/) .

-----------------------------------------------------------------------------

### REST Client

The file **test.http** can be used to make requests if you are using the [VSCode Rest Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)



