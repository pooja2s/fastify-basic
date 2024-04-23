const {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
} = require("../controllers/items");

// Item schema
const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: { type: "string" },
      },
      required: ["id"],
    },
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", maxLength: 50, minLength: 3 },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

const deleteItemOpts = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: { type: "string" },
      },
      required: ["id"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteItem,
};

const updateItemOpts = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: { type: "string" },
      },
      required: ["id"],
    },
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", maxLength: 50, minLength: 3 },
      },
    },
    response: {
      200: Item,
    },
  },
  handler: updateItem,
};

function itemRoutes(fastify, options, done) {
  // Register the JSON schema plugin
  // fastify.register(require("fastify-schema"));

  // Get all items
  fastify.get("/items", getItemsOpts);

  // Get single item
  fastify.get("/items/:id", getItemOpts);

  // Add item
  fastify.post("/items", postItemOpts);

  // Delete item
  fastify.delete("/items/:id", deleteItemOpts);

  // Update item
  fastify.put("/items/:id", updateItemOpts);

  done();
}

module.exports = itemRoutes;
