const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var item=0;
while (item<ingredients.length){
  console.log(ingredients[item]);
  item++;
}
// Write a for loop that prints out the contents of ingredients:
for (var q=0; q<ingredients.length; q++){
  console.log(ingredients[q]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
var ingredientsRev= ingredients.reverse();
for (var q=0; q<ingredients.length; q++){
   console.log(ingredientsRev[q]);
}