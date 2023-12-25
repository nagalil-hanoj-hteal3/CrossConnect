const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const cors = require('cors');

const app = express();
// const PORT = process.env.PORT || 3000;
// const PORT = 3000;

// app.use(express.json());
// app.use(express.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use(cors({ origin: 'http://localhost:3000' }));


// Handle signup POST request
app.post('/signup', (req, res) => {
  console.log('Received signup request:', req.body);
  
  const { username, fullName, email, phone, password } = req.body;

//   if (username && full_name && email && phone_number && password) {
//       try {
          // Use a secure method to hash passwords (e.g., bcrypt)
          // For simplicity, we'll assume password is already hashed
        //   const passwordHash = password;

          // Insert user data into the Users table
        db.query(
            'INSERT INTO Users(username, full_name, email, password_hash, phone_number) VALUES (?, ?, ?, ?, ?)',
            [username, fullName, email, password, phone], 
            (err, result) => {
                if (err) {
                    console.error('MySQL error:', err);
                    res.status(500).json({ success: false, message: 'Registration failed' });
                  } else {
                    console.log('User signed up successfully');
                    res.json({ success: true, message: 'Registration successful' });
                  }
        });

        //   console.log('User signed up successfully');

          // Send a success status
        //   res.sendStatus(200);
//       } catch (error) {
//           console.error('Error during signup:', error);
//           res.status(500).json({ error: 'Internal Server Error' }); // Send an error response
//       }
//   } else {
//       res.status(400).json({ error: 'Missing required fields' });
//   }
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});