import React from "react";
import { Card, Button } from "react-bootstrap";

const Book = ({
   id,
   bookname,
   author,
   price,
   quantity,
   date,
   handleRemoveBook,
}) => {
   return (
      <Card style={{ width: "18rem" }} className="book">
         <Card.Body>
            <Card.Title className="book-title">
               {bookname.charAt(0).toUpperCase() + bookname.slice(1)}
            </Card.Title>
            <div className="book-details"></div>
            <div>Author: {author}</div>
            <div>Quantity: {quantity}</div>
            <div>Price: {price}</div>
            <div>Date: {new Date(date).toDateString()}</div>
            <Button variant="primary">Edit</Button>{" "}
            <Button variant="danger" onClick={() => handleRemoveBook(id)}>
               Delete
            </Button>
         </Card.Body>
      </Card>
   );
};

export default Book;
