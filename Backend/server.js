require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const { faker } = require("@faker-js/faker");
const { faker } = require("@faker-js/faker");

const app = express();
app.use(cors());

const generateBooks = (language, seed, likes, reviews, page) => {
    faker.seed(parseInt(seed) + page);
    const books = Array.from({ length: 20 }, (_, index) => ({
        index: index + 1 + (page - 1) * 20,
        isbn: faker.string.uuid(),
        title: faker.lorem.words(3),
        author: faker.person.fullName(),
        publisher: faker.company.name(),
        likes: Math.random() < likes / 10 ? Math.round(Math.random() * 100) : 0,
        reviews:
            Math.random() < reviews / 10 ? Math.round(Math.random() * 50) : 0,
    }));

    return books;
};

app.get("/books", (req, res) => {
    const { language, seed, likes, reviews, page } = req.query;
    const books = generateBooks(language, seed, likes, reviews, parseInt(page));
    res.json(books);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Backend running on http://localhost:${PORT}`)
);
