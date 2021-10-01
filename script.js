"use strict";

const name = "Travis Asher";
let age = 26;
let birthday = "July 31";
let pineapplePizza = false;
const lifeEvents = [
  "Graduated High School",
  "Graduated College",
  "Found first degree job",
  "Started Grand Circus",
];

if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    console.log(`${counter} iterations to randomly generate the number 5.`);
  } else {
    console.log(
      `5 === 5. It took counter iterations to randomly generate the number 5`
    );
  }
  {
    break;
  }
}
