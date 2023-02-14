const { Schema }  = require('mongoose');

//sub doc schema for menu items will be used in venue schema

const menuCategorySchema = require('./Menu-item');
const menuSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    menuCreated: {
        type: Date,
        default: Date.now
    },
    menuCategory: [menuCategorySchema],
});

module.exports = menuSchema;