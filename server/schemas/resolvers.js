const mongoose = require('mongoose');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Users, Venue, Orders} = require('../models');

const resolvers = {

    Mutation: {
    addUser: async (parent, args) => {
        const user = await Users.create(args);
        const token = signToken(user);

        return { token, user };
    },

    addVenue: async (parent, args) => {
        const venue = await Venue.create(args);

        return venue;

    },

},
      

};

module.exports = resolvers;