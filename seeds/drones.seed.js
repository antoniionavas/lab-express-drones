// Iteration #1
const Drone = require("../models/Drone.model.js");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const db = require("../db/index.js");

//no vamos a utilizar el .disconnect() para evitar que nos cree todo el rato drones[], porque hemos utilizado const db

Drone.create(drones);
