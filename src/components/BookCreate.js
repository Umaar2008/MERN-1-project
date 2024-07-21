import {  useState } from "react"
import useContextBooks from "../hooks/use-context-books"
function BookCreate  ( ){

    const [title, setTitle] = useState('')

    const { CreateBook } = useContextBooks();

    const HandleChange = (event) => {

        setTitle(event.target.value)
    }

    const HandleSubmit = (event) => {
        event.preventDefault();

        CreateBook(title)
        setTitle('')
    }
    return <div className="book-create">
        <h3>Add a Book</h3> 
        <form onSubmit={HandleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={HandleChange}/>
            <button className="button">Create!</button>
        </form>
         </div>;
}
export default BookCreate 