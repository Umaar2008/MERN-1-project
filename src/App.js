import { useEffect  } from "react";
import useContextBooks from "./hooks/use-context-books"
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App (){
    
    const { fetchBooks } = useContextBooks()

    useEffect (() => {
        fetchBooks()
    } , []);
      
        return <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
}
export default App