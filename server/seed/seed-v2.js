const mongoose = require('mongoose');
const User = require('../models/Users');
const Venues = require('../models/Venues');
const MenuCategory = require('../models/Menu-category');
const MenuItem = require('../models/Menu-item');
const ModifierGroup = require('../models/Modifer-group');
const Modifiers = require('../models/Modifiers');

mongoose.connect('mongodb://localhost/hospo-order', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create a Venue
const venue = new Venues({
  name: 'The Test Venue',
  address: '123 Main Street',
  city: 'Anytown',
  state: 'CA',
  zip: 12345,
  phone: 123,
  email: 'test@venue.com',
  website: 'http://www.testvenue.com',
  instagram: 'http://instagram.com/testvenue',
  facebook: 'http://facebook.com/testvenue',
  twitter: 'http://twitter.com/testvenue',
});

// Create a MenuCategory
const menuCategory = new MenuCategory({
  name: 'Appetizers',
  description: 'Start your meal off right with our delicious appetizers.',
  venue: venue._id,
});

// Create a MenuItem
const menuItem = new MenuItem({
  name: 'Cheese Sticks',
  description: 'Mozzarella sticks served with marinara sauce.',
  price: 5.99,
  imgLocation: '/images/cheese-sticks.jpg',
  menuCategory: menuCategory._id,
});

// Create a ModifierGroup
const modifierGroup = new ModifierGroup({
  name: 'Add-ons',
  description: 'Enhance your dish with our add-ons.',
  menu_item: menuItem._id,
});

// Create Modifiers
const modifier1 = new Modifiers({
  name: 'Extra Cheese',
  price: 0.50,
  modifier_group: modifierGroup._id,
});

const modifier2 = new Modifiers({
  name: 'Bacon',
  price: 1.00,
  modifier_group: modifierGroup._id,
});

// Save the data to the database
Promise.all([
  venue.save(),
  menuCategory.save(),
  menuItem.save(),
  modifierGroup.save(),
  modifier1.save(),
  modifier2.save(),
])
  .then(() => console.log('Data saved to the database'))
  .catch((error) => console.log(error))
  .finally(() => mongoose.disconnect());

