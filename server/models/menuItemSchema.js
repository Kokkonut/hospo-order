const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
});

module.exports = menuItemSchema