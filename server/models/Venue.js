const { Schema, model } = require('mongoose');
const menuSchema = require('./menuSchema');

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
    //this is the old bit of code
    menu: {
        type: [menuSchema]
    },
// end old code
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],

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