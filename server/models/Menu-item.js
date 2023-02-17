const { Schema, model } = require('mongoose');

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
    itemCreated: {
        type: Date,
        default: Date.now
    },
    imgLocation: {
        type: String, //contains the path to the image
        required: false,
        trim: true
    },
    modifier_group: {
        type: Schema.Types.ObjectId,
        ref: 'ModifierGroup'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'MenuCategory'
    }
});

const MenuItems = model('MenuItems', menuItemSchema);
module.exports = MenuItems;
