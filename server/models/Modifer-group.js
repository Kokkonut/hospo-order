const { Schema, model } = require('mongoose');

const modifierGroupSchema = new Schema({
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
    modifierGroupCreated: {
        type: Date,
        default: Date.now
    },
    modifiers: [{
        type: Schema.Types.ObjectId,
        ref: 'Modifier'
    }],
    menu_item: {
        type: Schema.Types.ObjectId,
        ref: 'MenuItem',
        required: true
        
    }
});

const ModifierGroup = model('ModifierGroup', modifierGroupSchema);
module.exports = ModifierGroup;