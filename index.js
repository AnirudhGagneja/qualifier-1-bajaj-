const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: "Invalid input format" });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /[a-zA-Z]/.test(item));
  const highest_alphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }))[0]] : [];

  const response = {
    is_success: true,
    user_id: "Anirudh_gagneja_14-05-2004", 
    email: "22bcs16527@cuchd.in", 
    roll_number: "22BCS16527", 
    numbers,
    alphabets,
    highest_alphabet,
  };

  res.status(200).json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});