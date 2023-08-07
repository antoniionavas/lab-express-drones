const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model.js");

// require the Drone model here

router.get("/", async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  try {
    const listDrone = await Drone.find();
    res.render("drones/list.hbs", {
      listDrone,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs");
});

router.post("/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;

  try {
    await Drone.create({
      name,
      propellers,
      maxSpeed,
    });

    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  try {
    const oneDrone = await Drone.findById(req.params.id);

    res.render("drones/update-form.hbs", {
      oneDrone,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  const droneId = req.params.id;

  const { name, propellers, maxSpeed } = req.body;

  try {

 await Drone.findByIdAndUpdate(droneId, {
      name,
      propellers,
      maxSpeed,
    });

    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.post("/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
