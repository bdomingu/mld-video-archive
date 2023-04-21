import express from 'express';
import cors from 'cors';
import connectToDatabase from './db';
import User from './User';

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

const PORT = 3100

app.post('/register', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({message: 'Please enter all fields'});
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match'});
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  const hashedPassword = await User.hashPassword(password);

  const user = new User({
    name, 
    email,
    password: hashedPassword,
  });

  await user.save();

  res.status(201).json({ message: 'User registered successfully'});
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


