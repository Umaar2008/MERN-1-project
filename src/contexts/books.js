import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const EditBookById = async (_id, newTitle) => {
    const response = await axios.put(`http://localhost:5000/books/${_id}`, {
      title: newTitle,
    });
    console.log(response);
    const updatedbooks = books.map((book) => {
      if (book._id === _id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedbooks);
  };

  const DeleteBookById = async (_id) => {
    const response = await axios.delete(`http://localhost:5000/books/${_id}`);

    const updatedBooks = books.filter((book) => {
      return book._id !== _id;
    });
    setBooks(updatedBooks);
  };

  const CreateBook = async (title) => {
    try {
      const response = await axios.post("http://localhost:5000/books", {
        title,
      });

      const updatedBooks = [...books, response.data];
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  const valueToShare = {
    fetchBooks,
    books,
    CreateBook,
    EditBookById,
    DeleteBookById
  };

  return <BookContext.Provider value={valueToShare}>
    {children}
  </BookContext.Provider>;
}

export { Provider };
export default BookContext;
