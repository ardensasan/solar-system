import mercuryMap from "../assets/maps/map/mercury.jpg";
import venusMap from "../assets/maps/map/venus.jpg";
import earthMap from "../assets/maps/map/earth.jpg";
import marsMap from "../assets/maps/map/mars.jpg";
import jupiterMap from "../assets/maps/map/jupiter.jpg";
import saturnMap from "../assets/maps/map/saturn.jpg";
import uranusMap from "../assets/maps/map/uranus.jpg";
import neptuneMap from "../assets/maps/map/neptune.jpg";
import { PlanetProperties } from "./types";

//revolution and rotation data from https://www.exploratorium.edu/ronh/age/
//planet sizes based on https://solarsystem.nasa.gov/resources/686/solar-system-sizes/
export const planetList: Array<PlanetProperties> = [
  {
    name: "Mercury",
    radius: 0.00244,
    distanceFromSun: 1.11,
    revolution: 47.9,
    rotation: 58.6,
    map: mercuryMap,
  },
  {
    name: "Venus",
    radius: 0.006052,
    distanceFromSun: 1.22,
    revolution: 224.7,
    rotation: 243,
    map: venusMap,
  },
  {
    name: "Earth",
    radius: 0.06371,
    distanceFromSun: 1.39,
    revolution: 365.26,
    rotation: 1,
    map: earthMap,
  },
  {
    name: "Mars",
    radius: 0.0393,
    distanceFromSun: 1.53,
    revolution: 1.88,
    rotation: 1.03,
    map: marsMap,
  },
  {
    name: "Jupiter",
    radius: 0.36911,
    distanceFromSun: 2.02,
    revolution: 11.86,
    rotation: 0.41,
    map: jupiterMap,
  },
  {
    name: "Saturn",
    radius: 0.24232,
    distanceFromSun: 2.70,
    revolution: 0.45,
    rotation: 29.46,
    map: saturnMap,
  },
  {
    name: "Uranus",
    radius: 0.15362,
    distanceFromSun: 3.17,
    revolution: 0.72,
    rotation: 84.01,
    map: uranusMap,
  },
  {
    name: "Neptune",
    radius: 0.14622,
    distanceFromSun: 3.54,
    revolution: 0.67,
    rotation: 164.79,
    map: neptuneMap,
  },
];
