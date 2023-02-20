const Venues = require('../models/Venue');

const venueSeed = {
  name: 'The Coffee Shop',
  address: '123 Main St',
  phone: '555-1234',
  email: 'info@thecoffeeshop.com',
  tradingHours: [
    {
      dayOfWeek: 'Monday',
      openTime: '07:00',
      closeTime: '15:00',
      closed: false,
    },
    {
      dayOfWeek: 'Tuesday',
      openTime: '08:00',
      closeTime: '16:00',
      closed: false,
    },
    {
      dayOfWeek: 'Wednesday',
      openTime: '06:30',
      closeTime: '14:30',
      closed: false,
    },
    {
      dayOfWeek: 'Thursday',
      openTime: '09:00',
      closeTime: '17:00',
      closed: false,
    },
    {
      dayOfWeek: 'Friday',
      openTime: '07:30',
      closeTime: '15:30',
      closed: false,
    },
    {
      dayOfWeek: 'Saturday',
      openTime: '08:30',
      closeTime: '16:30',
      closed: false,
    },
    {
      dayOfWeek: 'Sunday',
      openTime: '10:00',
      closeTime: '18:00',
      closed: false,
    },
  ],
};

Venues.create(venueSeed)
  .then((venue) => {
    console.log(`Created venue: ${venue.name}`);
  })
  .catch((error) => {
    console.error(`Error creating venue: ${error}`);
  });
