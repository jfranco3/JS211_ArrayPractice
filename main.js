//cars
const cars = ["Ford", "Chevy", "Buick", "Nissan"]
console.log(cars.length)

const moreCars = ["Hyundai", "Toyota", "BMW", "Honda"]

totalCars = cars.concat(moreCars)
console.log(totalCars)

let hondaIndex = totalCars.indexOf('Honda')
console.log('the index of Honda is ' ,hondaIndex)

let fordLastIndexOf = totalCars.lastIndexOf('Ford')
console.log('the last index of Ford is' ,fordLastIndexOf)

let stringOfCars = totalCars.join()
console.log('totalCars array converted to a string' ,stringOfCars)

let carsFromString = stringOfCars.split(",", stringOfCars.length)
console.log('stringOfCars converted to array' ,carsFromString)

let carsInReverse = totalCars.reverse()
console.log('totalCars in reverse' ,carsInReverse)

let alphabeticalTotalCars = totalCars.sort()
console.log('totalCars sorted alphabetically' ,alphabeticalTotalCars)

let yourPrediction = "BMW"
  
console.log(carsInReverse.indexOf(yourPrediction))

//pets
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

let reptilesArray = pets.slice(4,-1)
console.log(reptilesArray)
console.log(pets)

let removedReptiles = pets.splice(4,2)
console.log(removedReptiles)
console.log(pets)

let hamster = pets.splice(4,0,'hamster')
console.log(pets)

let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

pets.push("bird")
  console.log(pets)

pets.shift('hamster')
console.log(pets)

pets.unshift('turtle')
console.log(pets)

//add 2 to each item in the array
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
numbers.forEach((num, index, array) => {
  array[index] = num + 2;
});
console.log(numbers);