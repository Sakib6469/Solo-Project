const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name is required']
        },

        age: {
            type: Number,
            required: [true, 'age is required']
        },

        turn: {
            type: Number
        }
    },
    {timestamps: true },
    
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;

