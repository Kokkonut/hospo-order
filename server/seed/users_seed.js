// Require the Mongoose library and the User model
const mongoose = require('mongoose');
const User = require('./models/user');

// Connect to the database
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

// Create an array of user objects
const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: 1234567890,
    password: 'password123',
    isVenueOwner: false,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@example.com',
    phone: 2345678901,
    password: 'password456',
    isVenueOwner: true,
  },
  // Add more users here
];

// Insert the users into the database
User.insertMany(users)
  .then(() => {
    console.log('Seed data inserted successfully!');
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
