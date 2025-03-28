import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "./components/Header";
import TableContent from "./components/TableContent";

const App = () => {
    const [language, setLanguage] = useState("English");
    const [seed, setSeed] = useState(42);
    const [likes, setLikes] = useState(3.5);
    const [reviews, setReviews] = useState(4.7);
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchBooks(1, true);
    }, [language, seed, likes, reviews]);

    async function fetchBooks(pageNumber, reset = false) {
        try {
            const response = await fetch(
                // `http://localhost:5000/books?language=${language}&seed=${seed}&likes=${likes}&reviews=${reviews}&page=${pageNumber}`
                `https://faker-fake-book-store-backend.onrender.com/books?language=${language}&seed=${seed}&likes=${likes}&reviews=${reviews}&page=${pageNumber}`
            );
            const data = await response.json();
            setBooks(reset ? data : [...books, ...data]);
            setPage(pageNumber);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    return (
        <div className="container mx-auto p-4">
            <Header
                {...{
                    books,
                    language,
                    setLanguage,
                    seed,
                    setSeed,
                    likes,
                    setLikes,
                    reviews,
                    setReviews,
                }}
            />
            <InfiniteScroll
                dataLength={books.length}
                next={() => fetchBooks(page + 1)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <TableContent books={books} />
            </InfiniteScroll>
        </div>
    );
};

export default App;
