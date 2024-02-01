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




![fastify-white](https://github.com/pooja2s/fastify-basic/assets/90834017/95fed8e4-803f-4522-8fb0-37dc24ba021e)<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0" y="0" style="enable-background:new 0 0 6747 2071" version="1.1" viewBox="0 0 6747 2071">
  <path fill="#fff" d="m6603 332 97-250-4-16-956 252c102-148 67-266 67-266s-305 195-536 190-305-67-659 46-454 459-557 534c-102 74-423 321-423 321l290-93s-82 78-251 305v1c27 38 146 195 264 161 13-4 28-11 45-19 53 30 124 59 201 67 0 0-52-60-96-130l36-23-6 4 111 40-12-104h1l108 40-13-95 41-20 113-428 468-320-37 94c-95 233-273 288-273 288l-74 29c-56 65-79 81-98 301 45-12 87-14 126-4 200 54 269 295 215 362-13 16-45 45-86 78h-81l-1 66-8 7h-83l-1 64-22 16c-77 2-176-66-176-66 1 62 52 157 52 157l9-5-8 6s208 138 339 87c116-46 417-283 677-395l786-208 104-268-599 158v-242l703-185 104-269-807 213V572ZM5176 843l187-49 2 9-58 151-193 51zm64 323-193 51 63-162 186-49 3 9zm252-54-193 51 63-162 186-49 3 9z"/>
  <g fill="#fff">
    <path d="m187 657 6-31c17-90 51-167 114-225 46-43 114-69 191-69 49 0 86 7 109 15l-43 148c-18-6-35-9-60-9-69 0-109 72-122 138l-6 33h146l-26 135H353l-119 618H42l118-618"/>
    <path d="m817 1410 6-126h-5c-60 100-132 138-192 138-110 0-164-94-164-226 0-228 114-552 438-552 75 0 151 13 197 31l-83 419c-18 88-32 234-31 316H817zm69-618c-15-3-29-4-40-4-126 0-194 251-196 362 0 66 10 114 57 114 53 0 102-87 130-224l49-248z"/>
    <path d="M1120 1245c31 17 68 32 122 31 56-2 86-37 86-85 0-42-20-71-72-112-65-53-96-119-96-184 0-138 108-251 279-251 67 0 114 12 142 28l-42 140c-21-12-57-23-89-23-62 0-100 32-100 83 0 39 22 62 57 91 85 65 113 139 113 197 0 167-116 259-289 259-69 0-131-20-157-38l46-136z"/>
    <path d="m1971 453-39 204h296l-25 135h-297l-66 350c-5 26-6 49-6 63 0 46 23 63 58 63 14 0 34 0 52-3l-23 145c-35 9-78 12-115 12-116 0-173-64-173-166 0-34 6-76 14-113l66-351h-87l26-136h88l30-155 201-48z"/>
    <path d="m2017 1410 145-753h192l-144 753h-193zm180-946c0-56 40-119 108-119 63 0 93 48 91 100-2 77-54 121-111 121-62 0-89-45-88-102z"/>
    <path d="m2474 657 6-31c17-90 51-167 114-225 46-43 114-69 191-69 49 0 86 7 109 15l-43 148c-18-6-35-9-60-9-69 0-109 72-121 138l-7 33h224l-26 135h-221l-118 618h-193l119-618"/>
    <path d="m3007 657 5 362c1 71 3 123 1 178h3c16-61 31-112 57-192l114-349h194l-246 594c-74 172-159 317-251 402-45 41-97 74-129 87l-77-157c33-17 69-37 100-61 43-36 84-79 103-121 3-10 6-18 4-33l-80-711h202z"/>
  </g>
</svg>


