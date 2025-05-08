'use strict';

let libraryBooks = [
  { title: 'The Road Ahead', author: 'Bill Gates', ID: 1235 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', ID: 4268 },
  { title: 'The Road Ahead', author: 'Bill Gates', ID: 4268 },
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', ID: 3257 }
];

function addBook(title, author, ID) {
  if (libraryBooks.find((book) => book.ID === ID)) return null;
  const newBook = { title, author, ID };
  libraryBooks.push(newBook);
  return newBook;
}

function getTitles() {
  return libraryBooks.map((book) => book.title).sort();
}

function findBooks(keyword) {
  return libraryBooks
    .filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => a.ID - b.ID);
}

// Example output
console.log(addBook('Balance', 'Haining Song', 1000));
console.log(getTitles());
console.log(findBooks('road'));
