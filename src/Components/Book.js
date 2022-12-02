import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Book = ({
   id,
   bookname,
   author,
   price,
   quantity,
   date,
   handleRemoveBook,
}) => {
   const Navigate = useNavigate();
   return (
      <Card style={{ width: "18rem" }} className="book">
         <Card.Body>
            <Card.Title className="book-title">
               {/* {bookname} */}
               {bookname.charAt(0).toUpperCase() + bookname.slice(1)}
            </Card.Title>
            <div className="book-details"></div>
            <div>Author: {author}</div>
            <div>Quantity: {quantity}</div>
            <div>Price: {price}</div>
            <div>Date: {new Date(date).toDateString()}</div>
            <Button variant="primary" onClick={() => Navigate(`/edit/${id}`)}>
               Edit
            </Button>{" "}
            <Button variant="danger" onClick={() => handleRemoveBook(id)}>
               Delete
            </Button>
         </Card.Body>
      </Card>
   );
};

export default Book;
