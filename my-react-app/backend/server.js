const express = require('express');
// const bodyParser = require('body-parser');
const db = require('./database').default;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname + "/frontend/src/index.html"));
});

// Handle signup POST request
app.post('/signup', async (req, res) => {
    const { username, full_name, email, phone_number, password } = req.body;
  
    if (username && full_name && email && phone_number && password) {
      try {
        await db.query('INSERT INTO Users(username, full_name, email, password_hash, phone_number) VALUES (?, ?, ?, ?, ?)', [username, full_name, email, password, phone_number]);
  
        console.log('User signed up successfully');
  
        // Send a success status
        res.sendStatus(200);
  
        // Redirect to the login page
        res.json({ redirect: '/' });
      } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(400).json({ error: 'Missing required fields' });
    }
});  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});