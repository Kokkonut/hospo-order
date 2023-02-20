const mongoose = require('mongoose');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Users, Venue, Orders } = require('../models');

const resolvers = {

    Query: {
        getVenues: async () => {
            return Venue.find();
        },

    },

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