import { Router } from "express";

import ArtistController from "./controllers/ArtistController";

const routes = new Router();

//CRUD (Create, Read, Update, Delete)
routes.get("/", (req, res) => {
  return res.json({ info: 'RESTful API Node.js + Express + Postgres'})
});

// artist
routes.get("/artist", ArtistController.index);
routes.get("/artist/:id", ArtistController.show);
routes.post("/artist", ArtistController.store);
routes.put("/artist/:id", ArtistController.update);
routes.delete("/artist/:id", ArtistController.destroy);

export default routes;