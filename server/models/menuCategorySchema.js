const mongoose = require('mongoose');
const menuItemSchema = require('./menuItemSchema');

const menuCategorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    menu_items: { type: [menuItemSchema] },
    });

module.exports = menuCategorySchema