# Library Portal Session Tracker

A simple web application built with **Express.js** that simulates user login/logout functionality by tracking user sessions. When users log in, their name and login time are stored in a session, which can be viewed on a profile page. Users can also log out, which destroys their session.

---

## Features

- User login form to enter name.
- Creates a session storing user’s name and login timestamp.
- Profile page displaying session info: user name and login time.
- Logout option that destroys the session.
- Session management implemented using **express-session**.
- Simple UI using EJS templating engine.
- Server-side session storage to simulate real login/logout flow.

---

## Technologies Used

- **Node.js** and **Express.js** for backend server.
- **express-session** middleware for session handling.
- **EJS** for server-side templating.
- **body-parser** middleware for parsing form data.
- Basic CSS for styling.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+ recommended)
- npm (comes with Node.js)

### Installation

1. Clone or download the repository:

```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Initialize npm and install dependencies:

npm init -y
npm install express express-session ejs body-parser

3. Create the folder structure:

Practical - 15/
│
├── views/
│   ├── login.ejs
│   ├── profile.ejs
│
├── public/
│   └── styles.css 
│
└── app.js

4. Add the Express server code to app.js.

5. Create EJS template files login.ejs and profile.ejs inside the views folder.

6. Add your CSS styles to public/styles.css if needed.

# Running the App

- Start the server: node app.js
- Open your browser and visit: http://localhost:3000/

# Application Flow

- User visits the login page (GET /).
- User enters their name and submits the form (POST /login).
- Server creates a session storing the username and login time.
- User is redirected to the profile page (GET /profile).
- Profile page shows username and formatted login time retrieved from the session.
- User can click Logout (GET /logout), which destroys the session and redirects back to login.

# Sample Screenshots (Optional)

- Login Page
    - Simple form with a name input and submit button.

- Profile Page
    - Displays:

"Welcome, [User Name]"
"You logged in at: [Login Time]"
Logout button.

# Code Highlights

- Uses express-session to handle sessions with cookie support.
- Stores user info and login timestamp in the session object.
- Middleware protects the profile route ensuring only logged-in users can view it.
- Clean separation of routes and views.
- Server-side session logic keeps user info secure.