import React from "react";
import _ from "lodash";
import Book from "./Book";
const BookList = ({ books, setBooks }) => {
   // Inside the handleRemoveBook function, we're calling the setBooks function by using the array filter method to keep only books that do not match with the provided book id.
   const handleRemoveBook = (id) => {
      setBooks(books.filter((book) => book.id !== id));
   };
   return (
      <React.Fragment>
         {/* _.isEmpty(books) Checks if value is an empty object, collection, map, or set. */}
         <div className="book-list">
            {!_.isEmpty(books) ? (
               books.map((book) => (
                  <Book
                     key={book.id}
                     {...book}
                     handleRemoveBook={handleRemoveBook}
                  />
               ))
            ) : (
               <p className="message">
                  No books available. Please add some books.
               </p>
            )}
         </div>
      </React.Fragment>
   );
};

export default BookList;
