
// Object Destructuring 1
// What does the following code return/print?

    // let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
    // let {numPlanets, yearNeptuneDiscovered} = facts;

    // console.log(numPlanets);
         // This equals 8 
    // console.log(yearNeptuneDiscovered);
        // This equals 1846

// Object Destructuring 2
// What does the following code return/print?

    // let planetFacts = {
    //     numPlanets: 8,
    //     yearNeptuneDiscovered: 1846,
    //     yearMarsDiscovered: 1659
    // };
    
    // let {numPlanets, ...discoveryYears} = planetFacts;

    //   console.log(discoveryYears); 
        // This equals {  yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659 }

// Object Destructuring 3
// What does the following code return/print?

    // function getUserData({firstName, favoriteColor="green"}){
    //     return `Your name is ${firstName} and you like ${favoriteColor}`;
    // }

    // getUserData({firstName: "Alejandro", favoriteColor: "purple"})
        // This equals : 'Your name is Alejandro and you like purple'
    // getUserData({firstName: "Melissa"})
        // This equals : 'Your name is Melissa and you like green'
    // getUserData({})
        // This equals : 'Your name is undefined and you like green'

// Array Destructuring 1
// What does the following code return/print?
    // let [first, second, third] = ["Maya", "Marisa", "Chi"];
    // console.log(first); //
    //     This equals : Maya
    // console.log(second); //
    //     This equals : Marisa
    // console.log(third); //
    //     This equals : Chi

// Array Destructuring 2
// What does the following code return/print?
    // let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    //     "Raindrops on roses",
    //     "whiskers on kittens",
    //     "Bright copper kettles",
    //     "warm woolen mittens",
    //     "Brown paper packages tied up with strings"
    // ]
    // console.log(raindrops); //
    //     This equals : 'Raindrops on roses'
    // console.log(whiskers); //
    //     This equals :'whiskers on kittens'
    // console.log(aFewOfMyFavoriteThings); //
    //     This equals : ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// Array Destructuring 3
// What does the following code return/print?
    // let numbers = [10, 20, 30];
    // [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
    // console.log(numbers) 
    //     This equals : [30, 20] 

// ES2015 Refactoring
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Assigning Variables to Object Properties

    // var obj = {
    //     numbers: {
    //     a: 1,
    //     b: 2
    //     }
    // };
    // var a = obj.numbers.a;
    // var b = obj.numbers.b;

// ES2015 Object Destructuring

const obj = {
        numbers: {
        a: 1,
        b: 2
        }
    };

const {a,b} = obj;

// ES5 Array Swap

    // var arr = [1, 2];
    // var temp = arr[0];
    // arr[0] = arr[1];
    // arr[1] = temp;

// ES2015 One-Line Array Swap with Destructuring
     const arr = [1, 2];

     [arr[0],arr[1]] = [arr[1],arr[0]]

//raceResults()

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})