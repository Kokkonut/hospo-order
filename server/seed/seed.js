const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Venue = require('../models/Venue');
const Users = require('../models/Users');
const Order = require('../models/Orders');

const saltRounds = 10;
const password = 'mypassword';

mongoose
  .connect('mongodb://localhost/hospo-order', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    // Create a venue with menus and some menu items
    const venue = await Venue.create({
      name: 'My Venue',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: 12345,
      phone: 1234567890,
      email: 'myvenue@example.com',
      // tradingHours: [
      //   {
      //     dayOfWeek: 'Monday',
      //     openTime: '10:00 AM',
      //     closeTime: '6:00 PM',
      //   },
      //   {
      //     dayOfWeek: 'Tuesday',
      //     openTime: '10:00 AM',
      //     closeTime: '6:00 PM',
      //   },
      // ],
      menu: [
        {
          name: 'Breakfast Menu',
          categories: [
            {
              name: 'Eggs',
              items: [
                {
                  name: 'Scrambled Eggs',
                  description: 'Two eggs scrambled',
                  price: 5.99,
                },
                {
                  name: 'Omelette',
                  description: 'Three egg omelette with cheese and vegetables',
                  price: 7.99,
                },
              ],
            },
            {
              name: 'Pancakes',
              items: [
                {
                  name: 'Buttermilk Pancakes',
                  description: 'Three buttermilk pancakes',
                  price: 6.99,
                },
              ],
            },
          ],
        },
        {
          name: 'Lunch Menu',
          categories: [
            {
              name: 'Sandwiches',
              items: [
                {
                  name: 'Turkey Sandwich',
                  description: 'Roasted turkey breast with lettuce and tomato on whole wheat bread',
                  price: 8.99,
                },
                {
                  name: 'Grilled Cheese',
                  description: 'Cheddar and American cheese on grilled sourdough bread',
                  price: 6.99,
                },
              ],
            },
            {
              name: 'Salads',
              items: [
                {
                  name: 'Cobb Salad',
                  description: 'Romaine lettuce, avocado, bacon, chicken, and blue cheese crumbles',
                  price: 10.99,
                },
              ],
            },
          ],
        },
      ],
    });

    // Create a user
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await Users.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      phone: 1234567890,
      password: hashedPassword,
      isVenueOwner: false,
    });

    // Create an order
    const order = await Order.create({
      venue: venue._id,
      user: user._id,
      items: [
        {
          name: 'Scrambled Eggs',
          price: 5.99,
          quantity: 2,
        },
        {
          name: 'Turkey Sandwich',
          price: 8.99,
          quantity: 1,
        },
      ],
    });

    // Add the order to the user's orders
    user.orders.push(order._id);
    await user.save();


    // Add the order to the venue's orders
    venue.orders.push(order._id);
    await venue.save();

    console.log('Done!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  }
);

