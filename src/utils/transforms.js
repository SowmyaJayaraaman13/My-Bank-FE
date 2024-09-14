import React from "react";
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}