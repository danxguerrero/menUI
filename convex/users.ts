import { mutation } from "./_generated/server";

export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    if (!identity.email) {
      throw new Error("User email is required");
    }

    // Check if we've already stored this identity before.
    // Note: If you don't want to define an index right away, you can use
    ctx.db.query("users")
     .filter(q => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
     .unique();


    // If it's a new identity, create a new `User`.
    return await ctx.db.insert("users", {
      tokenIdentifier: identity.tokenIdentifier,
      email: identity.email,
    });
  },
});