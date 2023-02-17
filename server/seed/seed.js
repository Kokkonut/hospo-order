const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/Users');
const Venues = require('../models/Venues');
const MenuCategory = require('../models/Menu-category');
const MenuItem = require('../models/Menu-item');
const ModifierGroup = require('../models/Modifer-group');
const Modifiers = require('../models/Modifiers');

mongoose.connect('mongodb://localhost/hospo-order', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', async () => {
  try {
    await db.dropDatabase();

    const password = await bcrypt.hash('password123', 10);

    const users = await User.create([
      {
        firstName: 'John',
        phone: 1232465,
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: password
      },
      {
        firstName: 'Jane',
        phone: 123456,
        lastName: 'Doe',
        email: 'janedoe@example.com',
        password: password
      }
    ]);

    const venue = await Venues.create({
      name: 'The Coffee House',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      phone: 3434234,
      email: 'info@thecoffeehouse.com',
      website: 'https://thecoffeehouse.com',
      instagram: 'https://www.instagram.com/thecoffeehouse',
      facebook: 'https://www.facebook.com/thecoffeehouse',
      twitter: 'https://twitter.com/thecoffeehouse',
      tradingHours: [
        { dayOfWeek: 'Monday', openTime: '7:00am', closeTime: '5:00pm' },
        { dayOfWeek: 'Tuesday', openTime: '7:00am', closeTime: '5:00pm' },
        { dayOfWeek: 'Wednesday', openTime: '7:00am', closeTime: '5:00pm' },
        { dayOfWeek: 'Thursday', openTime: '7:00am', closeTime: '5:00pm' },
        { dayOfWeek: 'Friday', openTime: '7:00am', closeTime: '5:00pm' },
        { dayOfWeek: 'Saturday', openTime: '9:00am', closeTime: '3:00pm' },
        { dayOfWeek: 'Sunday', openTime: 'Closed', closeTime: 'Closed', closed: true }
      ]
    });

    const menuCategory = await MenuCategory.create({
      name: 'Coffee Drinks',
      description: 'Our specialty coffee drinks',
      venue: venue._id
    });

    const menuItem = await MenuItem.create({
      name: 'Latte',
      description: 'Espresso and steamed milk',
      price: 4.50,
      imgLocation: '/img/latte.jpg',
      menuCategory: menuCategory._id
    });

    const modifierGroup = await ModifierGroup.create({
      name: 'Size',
      description: 'Choose your size',
      menuItem: menuItem._id
    });

    const modifier = await Modifiers.create({
      name: 'Large',
      price: 1.50,
      modifierGroup: modifierGroup._id
    });

    console.log('Seed data added to database.');
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
});
