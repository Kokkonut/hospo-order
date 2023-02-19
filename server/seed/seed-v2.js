const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Venue = require('../models/Venue');
const MenuCategory = require('../models/MenuCategory');
const MenuItem = require('../models/MenuItem');
const ModifierGroup = require('../models/ModifierGroup');
const Modifier = require('../models/Modifier');

mongoose.connect('mongodb://localhost/hospo-order', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.dropDatabase();

// Create a User
const user = new User({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '555-555-5555',
  password: 'password',
  isVenueOwner: false,
});

// Create a Venue
const venue = new Venue({
  name: 'The Test Venue',
  address: '123 Main Street',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
  phone: '555-555-5555',
  email: 'test@venue.com',
  website: 'http://www.testvenue.com',
  instagram: 'http://instagram.com/testvenue',
  facebook: 'http://facebook.com/testvenue',
  twitter: 'http://twitter.com/testvenue',
  owner: user._id,
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
  menuItem: menuItem._id,
});

// Create Modifiers
const modifier1 = new Modifier({
  name: 'Extra Cheese',
  price: 0.50,
  modifierGroup: modifierGroup._id,
});

const modifier2 = new Modifier({
  name: 'Bacon',
  price: 1.00,
  modifierGroup: modifierGroup._id,
});

// Save the data to the database
const saltRounds = 10;
bcrypt.hash(user.password, saltRounds, (err, hash) => {
  if (err) {
    console.log(err);
    return;
  }

  user.password = hash;
  user.save((err) => {
    if (err) {
      console.log(err);
      return;
    }

    venue.save((err) => {
      if (err) {
        console.log(err);
        return;
      }

      menuCategory.save((err) => {
        if (err) {
          console.log(err);
          return;
        }

        menuItem.save((err) => {
          if (err) {
            console.log(err);
            return;
          }

          modifierGroup.save((err) => {
            if (err) {
              console.log(err);
              return;
            }

            modifier1.save((err) => {
              if (err) {
                console.log(err);
                return;
              }

              modifier2.save((err) => {
                if (err) {
                  console.log(err);
                  return;
                }

                console.log('Data saved to the database');
                mongoose.disconnect();
              });
            });
          });
        });
