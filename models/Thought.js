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
        //ARRAY OF NESTED DOCUMENTS CREATED WITHT EH REASCTIONSCHEMA. 
    }
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;