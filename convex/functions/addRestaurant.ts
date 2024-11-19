import { mutation } from "../_generated/server"
import { v } from "convex/values"

// Create a new restaurant with the given text
export const createRestaurant = mutation({
    args: { name: v.string() },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()
        if (!identity) {
        throw new Error("Unauthenticated");
        }
        
        if (!identity.email) {
            throw new Error("User email not found");
        }
        
        const newRestaurantId = await ctx.db.insert("restaurants", { 
            name: args.name,
            owner: identity.email
        });
        return newRestaurantId;
    },
});