# Practical 16: Contact Form Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A full-stack contact form application built with React (frontend) and Node.js/Express (backend). Users can submit contact messages, which are sent via email using Nodemailer. This project demonstrates the integration of a modern frontend with a backend API for handling form submissions and email notifications.

## Features

- **Frontend**: React application with a simple contact form
- **Backend**: Express server handling form submissions
- **Email Integration**: Sends contact messages to a specified email address
- **CORS Enabled**: Allows cross-origin requests
- **Input Validation**: Ensures all fields are filled before submission

## Project Structure

```
Practical - 16/
├── backend/
│   ├── package.json
│   └── server.js
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── App.jsx
        ├── ContactForm.jsx
        ├── main.jsx
        └── styles.css
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gmail account for email sending (or configure another email service)

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Practical - 16/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

   **Note**: For Gmail, use an App Password instead of your regular password. Enable 2FA and generate an App Password from your Google Account settings.

4. Start the backend server:
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Practical - 16/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173` (default Vite port).

## Usage

1. Open your browser and go to `http://localhost:5173`.
2. Fill in the contact form with your name, email, subject, and message.
3. Click "Send Message".
4. You should see a success message if the email is sent successfully.

## API Endpoint

- **POST** `/api/contact`
  - Body: `{ name, email, subject, message }`
  - Response: `{ message: "Message sent successfully!" }` or error message

## Technologies Used

- **Frontend**: React, Vite, Axios
- **Backend**: Node.js, Express, Nodemailer, CORS, Body-parser
- **Styling**: CSS

## Troubleshooting

- **Email not sending**: Check your `.env` file credentials and ensure the email service is configured correctly.
- **CORS errors**: Ensure the backend is running and the proxy is set up correctly in `vite.config.js`.
- **Port conflicts**: If port 5000 is in use, set a different PORT in the `.env` file.

## Development

- Run `npm run lint` in the frontend directory to check for linting errors.
- The backend uses CommonJS modules, while the frontend uses ES modules.

## License

This project is for educational purposes.
