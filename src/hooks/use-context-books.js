import { useContext } from "react";
import BookContext from "../contexts/books"
 function useContextBooks () {

    
    return useContext(BookContext)
 }

 export default useContextBooks;