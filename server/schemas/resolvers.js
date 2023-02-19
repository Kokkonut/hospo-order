const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Users, Venues, MenuCategory, ModifierGroup, Modifiers, MenuItems } = require('../models');

const resolvers = {
  Query: {
    venues: async () => {
      try {
        const venues = await Venues.find()
          .populate({
            path: 'menucategory',
            model: 'MenuCategory',
            populate: {
              path: 'menuItems',
              model: 'MenuItems',
              populate: {
                path: 'modifier_group',
                model: 'ModifierGroup',
                populate: {
                  path: 'modifiers',
                  model: 'Modifiers'
                }
              }
            }
          }).exec();
        // Use execPopulate to ensure the populated fields are included in the query results
        const populatedVenues = await Venues.populate(venues, {
          path: 'menucategory.menuItems.modifier_group.modifiers',
          model: 'Modifiers'
        });
        console.log(populatedVenues);
        return populatedVenues;
      } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch venues.');
      }
    },
    
    

    // allDetails: async () => {
    //   try {
    //     const venues = await Venues.find()
    //       .populate({
    //         path: 'menucategory',
    //         populate: {
    //           path: 'menuItems',
    //           populate: {
    //             path: 'modifier_group',
    //             populate: {
    //               path: 'modifiers'
    //             }
    //           }
    //         }
    //       }).exec();
    //       console.log(venues);
    //     return venues;
    //   } catch (err) {
    //     console.error(err);
    //     throw new Error('Failed to fetch venues.');
    //   }
    // },
    
  },
  Mutation: {
    createMenuCategory: async (parent, { input }) => {
      try {
        const menuCategory = await MenuCategory.create(input);
        return menuCategory;
      } catch (err) {
        console.error(err);
        throw new Error('Failed to create menu category.');
      }
    }
  }






  
};


module.exports = resolvers;