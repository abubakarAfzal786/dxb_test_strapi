module.exports = {
  query: `
      CustomPosts: [Posts]
      `,
  mutation: `
      createNewPost(title : String,description: String) : Posts
      `,
  resolver: {
    Query: {
      CustomPosts: {
        description: 'Return all posts that have more then 3 comments',
        resolverOf: 'application::comments.comments.index',
        resolver: async (obj, options, ctx) => {
          const knex = strapi.connections.default;
          const post = await knex.select(knex.raw(`posts.id as p_id,posts.title as title,posts.description as description,posts.user_id as p_user`)).from('posts').leftJoin('comments', 'posts.id', 'comments.post_id').having(knex.raw(`count(comments.comment)>3`)).groupBy('posts.id')
          console.log(post)
          return post;
        },
      },
    },
    Mutation: {
      createNewPost: {
        description: 'Create New Post',
        resolverOf: 'application::posts.posts.create',
        resolver: async (obj, options, {
          context
        }) => {
          const where = context.params;
          const data = context.request.body;
          console.log(data)
          return await strapi.api.posts.services.posts.create(data);
        },
      },
    },
  },
};