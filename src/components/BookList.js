import BookShow from "./BookShow"
import useContextBooks from "../hooks/use-context-books"

function BookList () {

const { books } = useContextBooks()

    const reversedBooks = [...books].reverse()
    const renderedBooks = reversedBooks.map((book)  => {
        return <BookShow book={book} key={book._id} /> 
    } )

    return <div className="book-list">
{renderedBooks}
    </div>
}


export default BookList 