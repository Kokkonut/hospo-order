const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');


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
        type: Number,
        required: true,
        unique: true,
        match: [/[0-9]{3}-[0-9]{3}-[0-9]{4}/, 'Must use a valid phone number']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    isVenueOwner: {
        type: Boolean,
        default: false
    },
    //still need to add past orders.
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
}
);

userSchema.virtual ('fullName').get(function () {
    //function to return first name and last letter of last name
    const lastLetter = this.lastName.charAt(0);
    return `${this.firstName} ${lastLetter}`;
}
);

const Users = model('Users', userSchema);

module.exports = Users;