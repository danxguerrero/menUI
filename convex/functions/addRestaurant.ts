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
        
        // Get or create the user
        const user = await ctx.db
            .query("users")
            .withIndex("by_token", (q) => 
                q.eq("tokenIdentifier", identity.tokenIdentifier))
            .first();
            
        if (!user) {
            throw new Error("User not found");
        }

        const newRestaurantId = await ctx.db.insert("restaurants", { 
            name: args.name,
            owner: user._id
        });
        return newRestaurantId;
    },
});