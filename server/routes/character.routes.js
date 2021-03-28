const Character = require("../controllers/character.controller");


module.exports = app => {
  app.get("/api/characters/", Character.findAllCharacters);
  app.get("/api/characters/:id", Character.findOneSingleCharacter);
  app.put("/api/characters/edit/:id", Character.updateExistingCharacter);
  app.post("/api/characters/new", Character.createNewCharacter);
  app.delete("/api/characters/delete/:id", Character.deleteAnExistingCharacter);
};