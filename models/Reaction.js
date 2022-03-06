//equivalent to a comment

const {Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    writtenBy: {
      type: String
    },
    reactionBody: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const Reaction = model('Reaction', ReactionSchema);
  
  module.exports = Reaction;