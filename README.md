# Book Directory

### Level: Beginner

## Endpoints

1. POST : /api/addBook -- add a book
   ```json
   {
     "title": "book15",
     "author": "Ravi Raushan",
     "publishedDate": "10/10/2020",
     "category": "Self Help",
     "pages": 123,
     "price": 99.99,
     "publication": "Pendant Pvt"
   }
   ```
2. GET : /api/getABook/:title -- get a book by title
3. GET : /api/getAllBook -- get all books
4. PUT : /api/updateBook/:title -- update a book
   ```json
   {
     "title": "book15",
     "author": "Ravi Raushan",
     "publishedDate": "10/10/2020",
     "category": "Self Help",
     "pages": 123,
     "price": 99.99,
     "publication": "Pendant Pvt"
   }
   ```
5. DELETE: /api/deleteBook/:title -- delete a book
