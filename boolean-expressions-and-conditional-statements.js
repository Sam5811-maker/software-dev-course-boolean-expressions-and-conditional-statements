/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
//Additional variables
const hasCompass = true;
const hasWater = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

// Nested condition for mountain path
if (choice === "mountains") {
  // Further customize the mountain scenario using torch
  if (hasTorch && hasCompass) {
    console.log("You light your torch and use your compass to navigate the dark mountains. You safely reach a mountain cabin.");
  } else if (hasTorch && !hasCompass) {
    console.log("You have a torch but without a compass, the mountains seem endless. You get a bit lost and decide to turn back.");
  } else {
    console.log("It's too dark in the mountains without a torch. You decide not to risk it and return home.");
  }
} else if (choice === "village") {
  // Nested condition for village path
  if (hasMap || hasCompass) {
    console.log("With your " + (hasMap ? "map" : "compass") + ", you find your way to the village.");
    // Further customize the village scenario using water
    if (hasWater) {
      console.log("In the village, you share your water and make many friends.");
    } else {
      console.log("Unfortunately, you realize you have no water. You must search for a well before you can settle in the village.");
    }
  } else {
    console.log("Without a map or compass, the village is hard to locate. You wander for hours before finding it by chance.");
  }
} else {
  console.log("Confused by the many paths, you get lost and wander aimlessly.");
}
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
