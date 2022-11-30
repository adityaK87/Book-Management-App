import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "../Components/AddBook";
import BookList from "../Components/BookList";
import Header from "../Components/Header";

const AppRouter = () => {
   return (
      <Router>
         <Header />
         <div>
            <div className="main-content">
               <Routes>
                  <Route path="/" exact element={<BookList />} />
                  <Route path="/add" element={<AddBook />} />
               </Routes>
            </div>
         </div>
      </Router>
   );
};

export default AppRouter;
