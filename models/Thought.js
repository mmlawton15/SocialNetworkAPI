//page for checking out someone's thought
const dateFormat = require('../utils/dateFormat');
const { Schema, model } = require('mongoose');

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
        reactions: {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        }
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
//     return this.reactions.reduce((total, reaction) => total + reaction.replies.length +1,0);
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;