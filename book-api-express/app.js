const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // untuk parsing JSON body

let books = []; // data sementara di memori

// GET all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// POST a book
app.post('/api/books', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
});

// GET one book by ID (array index here, for simplicity)
app.get('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books[id];
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(book);
});

// PUT update book
app.put('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!books[id]) {
    return res.status(404).json({ error: 'Book not found' });
  }
  books[id] = req.body;
  res.json({ message: 'Book updated', book: books[id] });
});

// DELETE book
app.delete('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!books[id]) {
    return res.status(404).json({ error: 'Book not found' });
  }
  books.splice(id, 1);
  res.json({ message: 'Book deleted' });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
