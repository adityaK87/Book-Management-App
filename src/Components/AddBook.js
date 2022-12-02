import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from './BookForm'

const AddBook = ({ books, setBooks }) => {
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
