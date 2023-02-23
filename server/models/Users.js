const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Orders = require('./Orders');
const Order = require('./Orders');


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    phone: {
        type: String,
        required: false,
        unique: false,
        match: [/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Must use a valid phone number']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },

    isVenueOwner: {
        type: Boolean,
        default: false
    },

    orders: [Order.schema]

},
{
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual ('fullName').get(function () {
    //function to return first name and last letter of last name
    const lastLetter = this.lastName.charAt(0);
    return `${this.firstName} ${lastLetter}`;
}
);

const Users = model('Users', userSchema);

module.exports = Users;