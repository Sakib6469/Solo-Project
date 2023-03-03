const Player = require("../models/memory.models");

module.exports = {
    getAllPlayers: (req, res) => {
        Player.find({})
            .then((allPlayers) => res.json(allPlayers))
            .catch((err) => console.log(err));
    },

    getOnePlayer: (req, res) => {
        Player.findOne({ _id: req.params.id })
            .then((onePlayer) => res.json(onePlayer))
            .catch((err) => console.log(err));
    },

    createPlayer: (req, res) => {
        
        Player.create(req.body) 
            .then((newPlayer) => res.json(newPlayer)) 
            .catch((err) => res.status(400).json(err));
            
    },


    updatePlayer: (req, res) =>{
        Player.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedPlayer) => {
                console.log(updatedPlayer);
                res.json(updatedPlayer);
            })
            .catch((err) => console.log(err))
    },


    deletePlayer: (req, res) => {
        Player.deleteOne({_id: req.params.id})
            .then((deletedPlayer) => {
                console.log(deletedPlayer);
                res.json(deletedPlayer);
            })
            .catch((err)=> console.log(err))
    }



};