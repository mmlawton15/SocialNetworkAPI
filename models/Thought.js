//page for checking out someone's thought
const dateFormat = require('../utils/dateFormat');
const { Schema, model, Types } = require('mongoose');


const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        username: {
          type: String
        },
        reactionBody: {
          type: String
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);



const ThoughtSchema = new Schema({
        thoughtText: {
            type: String,
            required: true,
            length: [1, 280]
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
            //USE GETTER METHOD TO FORMAT TIMESTAMP ON QUERY, CHECK OUT SCHEMA SETTINGS
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//get total count of reactions and replies on retrieval THIS IS BREAKING MY CODE
// ThoughtSchema.virtual('reactionCount').get(function() {
//     return this.replies.length;
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;