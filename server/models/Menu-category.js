const { Schema, model } = require('mongoose');

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
    menuItems: [{
        type: Schema.Types.ObjectId,
        ref: 'MenuItem'
    }],
    venue: {
        type: Schema.Types.ObjectId,
        ref: 'Venues',
        required: true
    }
});

const MenuCategory = model('MenuCategory', menuCategorySchema);

module.exports = MenuCategory;
