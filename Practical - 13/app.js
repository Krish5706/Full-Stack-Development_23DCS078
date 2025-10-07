const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files (optional)
app.use(express.static("public"));

// Home page with form
app.get("/", (req, res) => {
  res.render("index", { error: null });
});

// Handle form submission
app.post("/calculate", (req, res) => {
  let { income1, income2 } = req.body;

  // Convert to numbers
  income1 = parseFloat(income1);
  income2 = parseFloat(income2);

  // Validate
  if (isNaN(income1) || isNaN(income2) || income1 < 0 || income2 < 0) {
    return res.render("index", { error: "Please enter valid positive numbers." });
  }

  const totalIncome = income1 + income2;

  res.render("result", { income1, income2, totalIncome });
});

// Start server
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
