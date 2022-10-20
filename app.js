const prompt = require('prompt-sync')({ sigint: true });



let fishKeep = [];
let descriptor1 = [" ", "Enourmous", "Miniature", "Gargantuous", "Huge", "Average", "Thiqq", "Small", "Fat", "Scrawny", "Smeagol lookin mf"];
let descriptor2 = [" ", "Red", "Green", "Blue", "Purple", "Silver", "Black", "Yellow", "Pink", "Orange", "Grey"];
let fishType = [" ", "Pikachu", "Lugia", "Entei", "Zapdos", "Mew", "Mewtwo", "Ho-Ho", "Rayquaza", "Groudon", "Missing.No"];
let superRare = ["First Edition Holo Charizard"];
let notRare = ["Magikarp"];
let totalWeight = 0;
let totalValue = 0;
let totalFish = fishKeep.length;
let timeCtr = 0;
let newFish = {};

/*
for our descriptive words
2 descriptors and 1 fish type
2 arrays of descriptors
1 array of fish types
*/
//hourCtr - variable to keep track of the time
// (While) loop to keep track of time

//variable for total pounds
//need fishKeep.length to track how many fish have been kept = totalFish


console.log("You are a Pokemon trainer! You have only 6 hours to catch as many pokemon as you can with the total weight 10lbs or under.  It takes roughly 1 hours to catch each pokemon (they are slippery little buggers). The goal is to keep it under 10lbs and maximize your value over 6 rounds.")

console.log('\n======================================================\n');



let rngFish = (name, weight, value) => {
    let newFish = {}
    newFish.name = name,
        newFish.weight = weight,
        newFish.value = value

    return newFish;
}



let rng = () => {
    let result = (Math.ceil(Math.random() * 10))

    return result

}

let rngWeight = () => {
    let weight = (Math.ceil(Math.random() * 1000) / 200)
    return weight
}

let rngValue = () => {
    let value = (Math.ceil(Math.random() * 1000) / 50)
    return value
}
let runAllFunctions = () => {
    let fullName = `${descriptor1[rng()]} ${descriptor2[rng()]} ${fishType[rng()]}`;
    let weight = rngWeight();
    let value = rngValue();
    let newFish = rngFish(fullName, weight, value)
    return newFish
}


// console.log(rngFish(fullName, weight, value));
// console.log(newFish);
// let userInput = prompt()
console.log('It is time for the first round!')
while (totalWeight < 10 && timeCtr < 6) {
    console.log('\n======================================================\n');
    // rngWeight();
    // rngValue();
    // rng();
    // let fullName = `${descriptor1[rng()]} ${descriptor2[rng()]} ${fishType[rng()]}`;
    // let weight = rngWeight();
    // let value = rngValue();
    // rngFish(fullName, weight, value)
    // newFish = rngFish(fullName, weight, value)
    newFish = runAllFunctions();
    console.log(newFish);
    let userInput = prompt("Would you like to (c)atch this pokemon? OR Would you like to (r)elease this pokemon?: ")
    if (userInput === 'c') {
        if (totalWeight + newFish.weight > 10) {
            console.log('\n===You cannot catch this pokemon it will put you over your limit!===\n')
            timeCtr++;
            console.log('round #: ' + timeCtr)
           continue;
        }
        totalWeight += newFish.weight
        totalValue += newFish.value;
        fishKeep.push(newFish.name)
    } else if (userInput === 'r') {
        console.log('\n====You have released the pokemon back to the wild!====\n')
    }
    if (totalWeight >= 7)
    console.log('\n===You are about to go over your weight limit of 10 lbs! Be careful!===\n')
    
    if (timeCtr === 4) {
        console.log('The Next round is your last! MAKE IT COUNT!')
    }
    // console.log('Pokemon Caught so far: ' + fishKeep)
    console.log('total weight: ' + totalWeight)
    console.log('total value: ' + totalValue)
    console.log('total PokeMon caught: ' + fishKeep.length)
    timeCtr++
    console.log('round #: ' + timeCtr);
}
console.log('That is the competition! Nice work!');
console.log('The total weight of the pokemon you kept is: ' + totalWeight + 'lbs');
console.log('The total value you kept is: $' + totalValue);
console.log('Total amount PokeMon you have kept: ' + fishKeep.length);
console.log('Here are the different kinds of Pokemon you caught!!!!!');
console.log(fishKeep);