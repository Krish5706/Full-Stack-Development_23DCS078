const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8000;

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files from 'public' folder (for CSS etc.)
app.use(express.static('public'));

// Configure multer storage and file filter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // save files in 'uploads' folder
  },
  filename: function (req, file, cb) {
    // Use timestamp + original name to avoid overwriting
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// File filter to accept only PDFs
function fileFilter(req, file, cb) {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed!'));
  }
}

// Multer upload configuration: max file size 2MB
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: fileFilter
}).single('resume'); // Expect input field name to be 'resume'

// GET route to display upload form
app.get('/', (req, res) => {
  res.render('index', { message: null, error: null });
});

// POST route to handle file upload
app.post('/upload', (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      // Multer error or custom error (wrong file type or too big)
      return res.render('index', { message: null, error: err.message });
    }
    if (!req.file) {
      // No file uploaded
      return res.render('index', { message: null, error: 'Please select a PDF file to upload.' });
    }
    // Success: file uploaded
    res.render('index', { message: 'File uploaded successfully!', error: null });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
