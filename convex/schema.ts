import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
    users: defineTable({
        tokenIdentifier: v.string(),
        email: v.optional(v.string()),
      }).index("by_token", ["tokenIdentifier"]).index("by_email", ["email"]),

    // Table for restaurants
    restaurants: defineTable({
        name: v.string(), // Restaurant name
        owner: v.string(), // Owner's email address
    }).index("by_owner", ["owner"]),
    
    // Table for menus
    menus: defineTable({
        restaurantId: v.id("restaurants"), // Foreign key reference to a restaurant
        name: v.string(), // Menu name (e.g., Breakfast, Lunch, Dinner)
    }),
    
    // Table for menu items
    menuItems: defineTable({
        menuId: v.id("menus"), // Foreign key reference to a menu
        name: v.string(), // Menu item name (e.g., Pancakes, Salad)
        description: v.string(), // Description of the menu item
        price: v.number(), // Price of the menu item
    }),
});
