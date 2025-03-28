function TableContent({ books }) {
    return (
        <>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">Index</th>
                        <th className="border p-2">ISBN</th>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Author</th>
                        <th className="border p-2">Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td className="border p-2">{index + 1}</td>
                            <td className="border p-2">{book.isbn}</td>
                            <td className="border p-2">{book.title}</td>
                            <td className="border p-2">{book.author}</td>
                            <td className="border p-2">{book.publisher}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableContent;
