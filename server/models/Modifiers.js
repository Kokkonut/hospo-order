const { Schema } = require('mongoose');

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
}
);

const Modifiers = mongoose.model('Modifiers', modifierGroupSchema);
module.exports = Modifiers;