import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "../Components/AddBook";
import BookList from "../Components/BookList";
import Header from "../Components/Header";
import UseLocalStorage from "../Hooks/UseLocalStorage";

const AppRouter = () => {
   const [books, setBook] = UseLocalStorage("books", [])
   return (
      <Router>
         <Header />
         <div>
            <div className="main-content">
               <Routes>
                  <Route path="/" element={<BookList books={books} setBooks={setBook} />} />
                  {/* <Route path="/add" exact render={(props) =>
                     <AddBook {...props} books={books} setBooks={setBook} />
                  } /> */}
                  <Route path="/add" element={<AddBook books={books} setBooks={setBook} />} />

               </Routes>
            </div>
         </div>
      </Router>
   );
};

export default AppRouter;
