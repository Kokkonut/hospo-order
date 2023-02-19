const mongoose = require('mongoose');

const menuCategorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    menu_items: { type: [menuItemSchema] },
    });

module.exports = menuCategorySchema