const { Schema, model } = require('mongoose');
const path = require('path');
const fs = require('fs');

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
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    menu: {
        type: Object,
        default: () => {
            const data = fs.readFileSync(path.resolve(__dirname, '../data/menu.json'), 'utf8');
            return JSON.parse(data);
        }
    },
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

const Venues = model('Venues', venueSchema);

module.exports = Venues;
