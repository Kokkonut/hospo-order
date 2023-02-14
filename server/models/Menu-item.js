const { Schema } = require('mongoose');

//This is a subdocument schema for the menu items it will be used in Menu-Categories schema

const menuItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    menuCreated: {
        type: Date,
        default: Date.now
    },
    imgLocation: {
        type: String,
        required: false,
        trim: true
    },
});

module.exports = menuItemSchema;