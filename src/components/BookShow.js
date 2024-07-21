import {  useState } from "react"
import BookEdit from "./BookEdit"
import useContextBooks from "../hooks/use-context-books"

function BookShow  ( { book }){

    const { DeleteBookById } = useContextBooks()

    const [ ShowEdit , SetShowEdit] = useState(false)

    const handleDeleteClick = () =>{
        DeleteBookById(book._id)
    }
    const handleEditClick = () => {
    SetShowEdit(!ShowEdit)
    }

    const  handleSubmit = () => {
        SetShowEdit(false)
        
    } 

    let content = <h3>{book.title}</h3>
    if(ShowEdit){
    content = <BookEdit book={book}  onSubmit={handleSubmit} />
    }

    return(
     <div className="book-show">
        <img 
        alt="Books"
        src="https://picsum.photos/300/200"
        />
        { content }
     <div className="actions">
        <button className="edit" onClick={handleEditClick}>
            Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
        Delete
        </button>

     </div>
     
     </div>
     
)

    
}
export default BookShow 