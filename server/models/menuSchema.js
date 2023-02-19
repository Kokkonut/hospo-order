const mongoose = require('mongoose');
const menuCategorySchema = require('./menuCategorySchema');

const menuSchema = new mongoose.Schema({
    title: { type: String, required: true },
    categories: { type: [menuCategorySchema] },
  });

  module.exports = menuSchema