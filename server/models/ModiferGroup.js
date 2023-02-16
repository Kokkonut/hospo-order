const { Schema } = require('mongoose');

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
        ref: 'Modifiers'
    }]
});

const ModifierGroup = mongoose.model('ModifierGroup', modifierGroupSchema);
module.exports = ModifierGroup;