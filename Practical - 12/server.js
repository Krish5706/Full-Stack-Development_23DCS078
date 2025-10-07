const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve calculator form
app.get('/', (req, res) => {
  res.send(`
    <h1 style="text-align:center;">Simple Calculator for Kids</h1>
    <form method="POST" action="/calculate" style="text-align:center;">
      <input type="text" name="num1" placeholder="First Number" required />
      <select name="operation">
        <option value="add">+</option>
        <option value="subtract">−</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>
      <input type="text" name="num2" placeholder="Second Number" required />
      <button type="submit">Calculate</button>
    </form>
  `);
});

// Handle form submission
app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    return res.send(`<p style="color:red; text-align:center;">Please enter valid numbers!<br><a href="/">Go Back</a></p>`);
  }

  if (operation === 'divide' && b === 0) {
    return res.send(`<p style="color:red; text-align:center;">Cannot divide by zero!<br><a href="/">Go Back</a></p>`);
  }

  let result;
  switch (operation) {
    case 'add': result = a + b; break;
    case 'subtract': result = a - b; break;
    case 'multiply': result = a * b; break;
    case 'divide': result = a / b; break;
    default: return res.send(`<p style="color:red; text-align:center;">Invalid operation!<br><a href="/">Go Back</a></p>`);
  }

  res.send(`
    <h1 style="text-align:center;">Result: ${result}</h1>
    <p style="text-align:center;"><a href="/">Try Again</a></p>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Calculator is running at http://localhost:${PORT}`);
});
