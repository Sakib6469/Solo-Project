const PlayerController = require("../controllers/memory.controllers")


module.exports = (app) => {
    app.get("/api/players", PlayerController.getAllPlayers);
    app.post("/api/players", PlayerController.createPlayer);
    app.get("/api/players/:id", PlayerController.getOnePlayer); 
    app.put("/api/players/:id", PlayerController.updatePlayer);
    app.delete("/api/players/:id", PlayerController.deletePlayer);
    
};