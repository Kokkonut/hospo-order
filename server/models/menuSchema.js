const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    title: { type: String, required: true },
    categories: { type: [menuCategorySchema] },
  });

  module.exports = menuSchema