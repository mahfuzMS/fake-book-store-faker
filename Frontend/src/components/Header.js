import { CSVLink } from "react-csv";

function Header({
    books,
    language,
    setLanguage,
    seed,
    setSeed,
    likes,
    setLikes,
    reviews,
    setReviews,
}) {
    return (
        <>
            <h1 className="text-xl font-bold text-center mb-4">
                Book Store App
            </h1>
            <div className="flex gap-4 mb-4">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option>English</option>
                    <option>Bangla</option>
                    <option>Russian</option>
                </select>
                <input
                    type="number"
                    value={seed}
                    onChange={(e) => setSeed(Number(e.target.value))}
                />
                <button
                    onClick={() => setSeed(Math.floor(Math.random() * 100000))}
                >
                    Random Seed
                </button>
                <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={likes}
                    onChange={(e) => setLikes(Number(e.target.value))}
                />
                <input
                    type="number"
                    step="0.1"
                    value={reviews}
                    onChange={(e) => setReviews(Number(e.target.value))}
                />
                <CSVLink data={books} filename="books.csv">
                    Export CSV
                </CSVLink>
            </div>
        </>
    );
}

export default Header;
