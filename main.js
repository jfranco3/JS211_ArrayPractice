//cars
//create array
const cars = ["Ford", "Chevy", "Buick", "Nissan"]
console.log(cars.length)

//create another array
const moreCars = ["Hyundai", "Toyota", "BMW", "Honda"]

//concat to combine arrays
totalCars = cars.concat(moreCars)
console.log(totalCars)

//use .indexOf() 
let hondaIndex = totalCars.indexOf('Honda')
console.log('the index of Honda is ' ,hondaIndex)

//use .lastIndexOf()
let fordLastIndexOf = totalCars.lastIndexOf('Ford')
console.log('the last index of Ford is' ,fordLastIndexOf)

//join method for array to string
let stringOfCars = totalCars.join()
console.log('totalCars array converted to a string' ,stringOfCars)

//split method for string to array + separator
let carsFromString = stringOfCars.split(",", stringOfCars.length)
console.log('stringOfCars converted to array' ,carsFromString)

//reverse method 
let carsInReverse = totalCars.reverse()
console.log('totalCars in reverse' ,carsInReverse)

//sort method
let alphabeticalTotalCars = totalCars.sort()
console.log('totalCars sorted alphabetically' ,alphabeticalTotalCars)

let yourPrediction = "BMW"
console.log(carsInReverse.indexOf(yourPrediction))

//pets
//creat array
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

//slice method to create reptiles array
let reptilesArray = pets.slice(4,6)
console.log(reptilesArray)
console.log(pets)

//splice method to create new array minus spliced items
let removedReptiles = pets.splice(4,2)
console.log(removedReptiles)
console.log(pets)

//splice method to add new string 
let hamster = pets.splice(4,0,'hamster')
console.log(pets)

//pop method to remove last item from array
let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

//push method to add string back in array
pets.push("bird")
  console.log(pets)

//shift method to remove 1st item from array
pets.shift()
console.log(pets)

//unshift method to add new string
pets.unshift('turtle')
console.log(pets)

//add 2 to each item in the array
//used forEach. method
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
numbers.forEach((num, index, array) => {
  array[index] = num + 2;
});
console.log(numbers);