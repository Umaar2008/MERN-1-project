import {  useState } from "react"
import useContextBooks from "../hooks/use-context-books"

function BookEdit  ({ onSubmit , book}){



    const { EditBookById } = useContextBooks()
    
    const [title , setTitle] = useState(book.title)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit()
        EditBookById(book._id , title)
        
    }
    
        const handleChange = (event) => {
            setTitle(event.target.value)
        }

    return <div> 
        <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} className="input" onChange={handleChange} />
        <button className="button is-primary" > Save </button>
        </form>
         </div>
}
export default BookEdit 