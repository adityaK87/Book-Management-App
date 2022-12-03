import React from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import AddBook from "../Components/AddBook";
import BookList from "../Components/BookList";
import EditBook from "../Components/EditBook";
import Header from "../Components/Header";
import UseLocalStorage from "../Hooks/UseLocalStorage";
import BookContext from "../Context/BookContext";
import Footer from "../Components/Footer";

const AppRouter = () => {
   const [books, setBooks] = UseLocalStorage("books", []);
   return (
      <Router>
         <Header />
         <div>
            <div className="main-content">
               {/* <Routes> }
                  { <Route
                        path="/"
                        element={<BookList books={books} setBooks={setBook} />}
                        />
                        <Route
                        path="/add"
                        element={<AddBook books={books} setBooks={setBook} />}
                        />
                        <Route
                        path="/edit/:id"
                        element={<EditBook books={books} setBooks={setBook} />}
                        />
                     <Route element={() => <Navigate path="/" />} /> 
               </Routes> */}
               {/* This above code can be written as this below code by using context Api  */}

               <BookContext.Provider value={{ books, setBooks }}>
                  <Routes>
                     <Route
                        path="/"
                        element={<BookList />}
                     />
                     <Route
                        path="/add"
                        element={<AddBook />}
                     />
                     <Route
                        path="/edit/:id"
                        element={<EditBook />}
                     />
                     <Route element={() => <Navigate path="/" />} />
                  </Routes>
               </BookContext.Provider>
            </div>
         </div>
         <div style={{ textAlign: "center" }}>

            <Footer />
         </div>
      </Router>
   );
};

export default AppRouter;
