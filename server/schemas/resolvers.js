const mongoose = require('mongoose');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Users, Venue, Orders} = require('../models');
const  Menu  = require('../models/menuSchema');
const  MenuCategory  = require('../models/menuCategorySchema');


const resolvers = {

    Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
    },

    },
      

};

module.exports = resolvers;