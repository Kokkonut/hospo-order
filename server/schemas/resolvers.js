const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Users, Venues, MenuCategory, ModifierGroup, Modifiers, MenuItems } = require('../models');
const resolvers = {
    Query: {
        //get all users
        // me: async (parent, args, context) => {
        //     if (context.user) {
        //         const userData = await Users.findOne({ _id: context.user._id })
        //             .select('-__v -password')

        //         return userData;
        //     }

        //     throw new AuthenticationError('Not logged in');
        // },
        // //get all venues
        // venues: async () => {
        //     return Venues.find();
        // },
        // //get all menu categories
        // menuCategories: async () => {
        //     return MenuCategory.find();
        // },
        // //get all menu items
        // menuItems: async () => {
        //     return MenuItems.find();
        // },
        // // //get all modifier groups
        // modifierGroups: async () => {
        //     return ModifierGroup.find();
        // },
        // // //get all modifiers
        // modifiers: async () => {
        //     return Modifiers.find();
        // },

        //query to return the menu, menu category, and menu item, and modifier group and modifiers
        getAllVenues: async () => {
          try {
            const venues = await Venues.find()
              .populate({
                path: 'menuCategories',
                populate: {
                  path: 'menuItems',
                  populate: {
                    path: 'modifierGroups',
                    populate: {
                      path: 'modifiers'
                    }
                  }
                }
              });
            console.log(venues);
            return venues;
          } catch (err) {
            throw new Error(`Failed to fetch venues: ${err}`);
          }
        }
        

    },

    Mutation: {
        //create a new user
        addUser: async (parent, args) => {
            const user = await Users.create(args);
            const token = signToken(user);
            return { token, user };
        },
        //login a user
        login: async (parent, { email, password }) => {
            const user = await Users.findOne({email, password});

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
    }
};

module.exports = resolvers;