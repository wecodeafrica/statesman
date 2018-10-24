const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const {
    Schema
} = mongoose;

const userSchema = new Schema({
        bio: {
            type: String,
        },
        name {
            type: String,
            index: true,
            unique: true
        },
        party: {
            type: String,
            unique: true,
            lowercase: true
        },
        hometown: {
            type: String,
        },
        website: {
            type: String
        },
        "social-media": {
            type: Boolean
        },
        manifesto: {
            type: String
        },
        education: [{
            year: Date,
            institution: String,
            degree: String
        }],
        achievements: [{
            image: String,
            title: String,
            date: Date,
            tags: Array,
            status: String,
            comments: String
        }],
        recommendation: [{
            avatar: String
        }]

});

module.exports = mongoose.model('Post', PostSchema);
