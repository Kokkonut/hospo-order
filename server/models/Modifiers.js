const { Schema, model } = require('mongoose');

const modifierGroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    modifier_group: {
        type: Schema.Types.ObjectId,
        ref: 'ModifierGroup',
        required  : true
    },
}
);

const Modifiers = model('Modifiers', modifierGroupSchema);
module.exports = Modifiers;