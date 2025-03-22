import Router from "express";

const progressRotuer = new Router();

progressRotuer.get("/", (req, res) => {
  res.json({
    message: "progress",
  });
});

export default progressRotuer;
