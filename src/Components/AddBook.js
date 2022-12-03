import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from './BookForm'
import BookContext from '../Context/BookContext';

const AddBook = (/*{ books, setBooks }*/) => {
    //now we are getting state by context api 
    const { books, setBooks } = useContext(BookContext)
    const Navigate = useNavigate()
    const handleOnSubmit = (book) => {
        setBooks([book, ...books])
        Navigate('/')
    }

    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddBook;
