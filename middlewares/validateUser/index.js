// module.exports = strapi => {
//   return {
//     initialize() {
//       strapi.app.use(async (ctx, next) => {
//         if (ctx.method == 'POST' && ctx.url == "/get-users") {
//           if (ctx.request.header.authorization) {
//             try {
//               const {
//                 id,
//                 isAuthenticated = false
//               } = await strapi.plugins[
//                 'users-permissions'
//               ].services.jwt.getToken(ctx);
//               ctx.state.user = await strapi.plugins[
//                 'users-permissions'
//               ].services.user.fetchAuthenticatedUser(id);
//               if (ctx.state.user.role.type == "authenticated") {
//                 const users = await strapi.query('user', 'users-permissions').find({
//                   country: 'Dubai'
//                 })
//                 return ctx.send(users)
//               } else {
//                 return ctx.throw(403, 'unauthenticated');
//               }
//             } catch (error) {
//               return console.error(error.message);
//             }
//           } else {
//             return ctx.throw(403, 'unauthenticated');
//           }
//         }
//         await next();
//       });
//     }
//   };
// };
