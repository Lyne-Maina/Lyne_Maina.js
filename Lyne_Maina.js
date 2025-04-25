const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
function password(str) {
    if (str.length < 8) {
      return false;
    }
    if (!/[A-Z]/.test(str)) {
      return false;
    }
    if (!/[a-z]/.test(str)) {
      return false;
    }
    if (!/[0-9]/.test(str)) {
      return false;
    }
    return true;
  }


app.get('/check', (req, res) => {
    const { password } = req.query;

    if (!password) {
        return res.status(400).send('Please provide a password using ?password=yourPassword');
    }

    const result = isValidPassword(password);
    res.send({ valid: result });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
    res.send('password=yourPassword.');
});

