//page for checking out someone's thought

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
            default: Date.now
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
        },
        id: false
    }
);

//get total count of reactions and replies on retrieval
ThoughtSchema.virtual('reactionCourt').get(function() {
    return this.comments.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;