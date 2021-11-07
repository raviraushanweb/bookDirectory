# Book Directory

### Level: Beginner

## Project setup

1. clone this repository
   `git clone https://github.com/raviraushanweb/bookDirectory.git`

2. run below command to install the npm packages
   `npm install`

3. create a `.env` file and add following variables

   ```
   APP_PORT=3000
   DEBUG_MODE=TRUE
   DB_URL=<your mongodb url here>
   DOMAIN=<your app url or localhost url>
   ```

4. if you don't have nodemon installed, install nodemon
   `npm i -g nodemon`

5. run the project
   `npm run dev`

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
     "pages": 124,
     "price": 50,
     "publication": "Pendant Pvt"
   }
   ```
5. DELETE: /api/deleteBook/:title -- delete a book
