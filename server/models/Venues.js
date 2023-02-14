const { Schema, model } = require('mongoose');

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
    website: {
        type: String,
        required: false,
        trim: true
    },
    instagram: {
        type: String,
        required: false,
        trim: true
    },
    facebook: {
        type: String,
        required: false,
        trim: true
    },
    twitter: {
        type: String,
        required: false,
        trim: true
    },
    venueCreated: {
        type: Date,
        default: Date.now
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

const Venue = model('Venue', venueSchema);

module.exports = Venue;