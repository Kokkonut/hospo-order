const { Schema } = require('mongoose');

//This is a subdocument schema for the menu categories it will be used in menues schema
// const menuItemSchema = require('./Menu-item');
const menuCategorySchema = new Schema({
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
    // menuItems: [menuItemSchema],
     menuItems: [{
        type: Schema.Types.ObjectId,
       ref: 'MenuItem'
    }]


});
const MenuCategory = mongoose.model('MenuCategory', menuCategorySchema);
module.exports = MenuCategory;
