import React, { useContext } from 'react';
import BookContext from "../Context/BookContext";
import BookForm from './BookForm';
import { useNavigate, useParams } from 'react-router-dom';
//useParams => returns object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>

const EditBook = (/*{ books, setBooks }*/) => {
    const { books, setBooks } = useContext(BookContext)
    const Navigate = useNavigate()
    const { id } = useParams()
    const bookToEdit = books.find((book) => book.id === id)

    const handleOnSubmit = (book) => {
        const filteredBooks = books.filter((book) => book.id !== id)
        setBooks([book, ...filteredBooks])
        Navigate('/')

    }
    return (
        <div>
            <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    )
}

export default EditBook
