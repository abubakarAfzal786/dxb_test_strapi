module.exports = {
  query: `
     
      `,
  mutation: `
      createNewComment(comment : String,post_id: Int) : Comments
      `,
  resolver: {
    Query: {
     
    },
    Mutation: {
      createNewComment: {
        description: 'Create New Post',
        resolverOf: 'application::comments.comments.create',
        resolver: async (obj, options, {
          context
        }) => {
          const where = context.params;
          const data = context.request.body;
          console.log(data)
          return await strapi.api.comments.services.comments.create(data);
        },
      },
    },
  },
};