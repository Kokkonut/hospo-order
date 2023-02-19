const { Schema, model } = require('mongoose');

// const menuSchema = require('./Menus');
const venueSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    zip: {
        type: Number,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    menu: {
        type: [menuSchema]
    },

    tradingHours: [
        {
          dayOfWeek: String,
          openTime: String,
          closeTime: String,
          closed: {
            type: Boolean,
            default: false
          }
        }
      ]
    });

//still need to add past orders.

const Venues = model('Venues', venueSchema);

module.exports = Venues;