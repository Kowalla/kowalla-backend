const ReactionController = require('../controllers/reaction');

module.exports = app => {
  // Reaction Routes
  app.get('/posts/:postId/reactions', ReactionController.getReactionList);
};
