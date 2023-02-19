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

    addVenue: async (parent, args) => {
        const venue = await Venue.create(args);

        return  venue ;
    },

    addMenu: async (parent, args) => {
        const { venue, title } = args;
        
        // Check if venue exists
        const existingVenue = await Venue.findById(venue);
        if (!existingVenue) {
          throw new Error('Venue not found');
        }
        
        // Create new menu and add to venue
        const newMenu = { title, categories: [] };
        existingVenue.menu.push(newMenu);
        await existingVenue.save();
        
        return newMenu;
      },

      addMenuCategory: async (parent, args) => {
        const { menu, title } = args;
      
        // Check if menu exists
        const existingMenu = await Menu.findById(menu);
        if (!existingMenu) {
          throw new Error('Menu not found');
        }
      
        // Create new category and add to menu
        const newCategory = existingMenu.categories.create({
          title,
          menu_items: [],
        });
        existingMenu.categories.push(newCategory);
        await existingMenu.save();
      
        return newCategory;
      },
      

    },
      

};

module.exports = resolvers;