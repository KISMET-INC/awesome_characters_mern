const Character = require("../controllers/character.controller");


module.exports = app => {
  app.get("/api/characters/", Character.findAllCharacters);
  app.get("/api/characters/:id", Character.findOneSinglePirate);
  app.put("/api/characters/update/:id", Character.updateExistingPirate);
  app.post("/api/characters/new", Character.createNewCharacter);
  app.delete("/api/characters/delete/:id", Character.deleteAnExistingCharacter);
};