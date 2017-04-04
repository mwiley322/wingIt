function index(req, res) {
  res.json({
    message: 'Welcome to the table of contents of Wingit!',
    documentation_url: 'https://github.com/mwiley322/wingIt',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      },
      {
        method: 'GET', path: '/api/users', description: 'Gets all users from database'
      },
      {
        method: 'GET', path: '/api/users/:id', description: 'Goes to single user profile'
      },
      {
        method: 'POST', path: '/api/users', description: 'Signs up a new user'
      },
      {
        method: 'PUT', path: '/api/users/:id', description: 'Updates a single users information'
      },
      {
        method: 'DELETE', path: '/api/users/:id', description: 'Destroys a single user account'
      },
      {
        method: 'GET', path: '/api/cities', description: 'Gets all cities within the database'
      },
      {
        method: 'GET', path: '/api/cities/:cityName', description: 'Gets all cities based on parameters'
      },
      {
        method: 'GET', path: '/api/cities/:cityId/posts', description: 'Gets all post for that city'
      },
      {
        method: 'GET', path: '/api/posts', description: 'Gets all posts from the database'
      },
      {
        method: 'GET', path: '/api/users/:userId/posts/', description: 'Gets all posts written by a single user'
      },
      {
        method: 'GET', path: '/api/posts/:postId', description: 'Gets a single post written by a single user'
      },
      {
        method: 'POST', path: '/api/user/:userId/city/:cityId/posts', description: 'Creates new post written by a single user with prefilled city and author'
      },
      {
        method: 'PUT', path: '/api/posts/:postId', description: 'Updates a single existing post written by a single user'
      },
      {
        method: 'DELETE', path: '/api/posts/:postId', description: 'Destroys a single post written by a user'
      }
      // {
      //   method: 'GET', path: '/api/users/posts/comments', description: 'Gets all comments within the database'
      // },
      // {
      //   method: 'GET', path: '/api/users/posts/comments/:id', description: 'Gets a single comment based on parameters'
      // },
      // {
      //   method: 'POST', path: '/api/users/posts/comments', description: 'Creates a single new comment on a post'
      // },
      // {
      //   method: 'PUT', path: '/api/users/posts/comments/:id', description: 'Updates a single existing comment on a city'
      // },
      // {
      //   method: 'DELETE', path: '/api/users/posts/comments/:id', description: 'Destroys a single comment on a post'
      // }
    ]
  });
}

module.exports = {index: index};
