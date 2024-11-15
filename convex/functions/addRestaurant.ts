// import { mutation } from "./_generated/server";

// export default mutation(async ({ db, auth }, { name }) => {
//   if (!auth.user) {
//     throw new Error("Unauthorized");
//   }

//   const userId = auth.user.id;
//   const restaurant = await db.insert("restaurants", { name, owner: userId });
//   return restaurant;
// });
