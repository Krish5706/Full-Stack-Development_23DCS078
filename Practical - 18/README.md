# Notes API

A RESTful API for a notes-taking application built with Express.js and MongoDB, featuring a simple frontend interface.

## Description

This project provides a backend API for managing notes, including creating, reading, updating, and deleting notes. It uses MongoDB as the database and includes a basic HTML/CSS/JavaScript frontend for interaction.

## Features

- Create, read, update, and delete notes
- Pin important notes
- Customize note colors
- Simple web-based UI

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Practical-18
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Ensure MongoDB is running on your system (default connection: mongodb://localhost:27017/notesdb).

4. Start the server:
   ```
   npm start
   ```

   For development with auto-restart:
   ```
   npm run dev
   ```

The server will start on port 3000 and automatically open in your default browser.

## Usage

- Access the application at `http://localhost:3000`
- Use the web interface to create and manage notes
- API endpoints are available under `/api/notes`

## API Endpoints

### GET /api/notes
Retrieve all notes, sorted by pinned status and timestamp.

### GET /api/notes/:id
Retrieve a single note by ID.

### POST /api/notes
Create a new note. Required fields: `title`, `content`. Optional: `color`, `pinned`.

Example request body:
```json
{
  "title": "My Note",
  "content": "This is the content of my note.",
  "color": "#ffff00",
  "pinned": true
}
```

### PUT /api/notes/:id
Update an existing note. Accepts the same fields as POST.

### DELETE /api/notes/:id
Delete a note by ID.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: HTML, CSS, JavaScript
- **Other**: CORS, Body-parser

## Project Structure

```
Practical-18/
├── models/
│   └── Note.js          # Note model schema
├── public/
│   ├── index.html       # Frontend HTML
│   ├── script.js        # Frontend JavaScript
│   └── style.css        # Frontend styles
├── routes/
│   └── notes.js         # API routes
├── package.json         # Dependencies and scripts
├── server.js            # Main server file
└── README.md            # This file
```