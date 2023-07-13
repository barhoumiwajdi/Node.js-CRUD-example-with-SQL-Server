module.exports = app => {

    const Book = require('../Controllers/BookController')
    var router = require("express").Router();

    // Create a new Book
    router.post("/", Book.create);

    // Retrieve all Book
    router.get("/", Book.findAll);

    // Retrieve all published Book
    router.get("/published", Book.findAllPublished);

    // Retrieve a single Book with id
    router.get("/:id", Book.findOne);

    // Update a Book with id
    router.put("/:id", Book.update);

    // Delete a Book with id
    router.delete("/:id", Book.delete);

    // Delete all Book
    router.delete("/", Book.deleteAll);

    app.use('/api/Book', router);
};