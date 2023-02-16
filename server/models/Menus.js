const { Schema, model }  = require('mongoose');

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

    menuCategory: [{
        type: Schema.Types.ObjectId,
        ref: 'MenuCategory'
    }]
});

const Menus = model('Menus', menuSchema);
module.exports = Menus;