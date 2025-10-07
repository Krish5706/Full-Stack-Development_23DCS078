# Job Portal Resume Upload

A simple Express.js application that allows users to upload resumes with the following restrictions:

- Only PDF files are accepted.
- Maximum file size allowed: 2MB.
- Invalid files (wrong type or too large) are rejected with user-friendly error messages.

This ensures the server remains safe and efficient by preventing unwanted or excessively large file uploads.

---

## Features

- Upload resume files via a web form.
- Server-side validation of file type (only PDFs).
- Enforce file size limit of 2MB.
- Display error messages if file upload fails validation.
- Store uploaded files safely on the server.

---

## Technical Stack

- **Node.js** with **Express.js** for backend
- **multer** middleware for handling file uploads
- Basic HTML form for file selection and submission

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (v12+ recommended)
- npm (comes with Node.js)

### Installation

1. Create a project folder and initialize npm:

    ```bash
    npm init -y
    ```

2. Install required dependencies:

    ```bash
    npm install express multer
    ```

3. Create your project structure:

    ```
    job-portal-upload/
    ├── uploads/           # directory where files will be saved
    ├── views/
    │   └── index.ejs      # upload form and result messages
    ├── app.js
    ```

4. Implement your Express server in `app.js`.

5. Create the upload form view `views/index.ejs`.

---

## Usage

### Start the server

```bash
node app.js
```

# How It Works

1. User visits the upload form page.

2. User selects a PDF file (max 2MB) and submits.

3. Server receives the file upload via multer.

4. Middleware checks:

    - File type is PDF.
    - File size does not exceed 2MB.

5. If file fails validation, an error message is displayed.

6. If valid, the file is saved to the /uploads directory and success message shown.

# Example Upload Form

- Simple HTML form with file input and submit button.
- Displays upload status or error messages.

# Important Notes

- Validation is done server-side to protect the server.
- Multer's file filter and limits handle the restrictions.
- You may want to add further security measures for production, like virus scanning.