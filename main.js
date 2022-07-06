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

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

let reptilesArray = pets.slice(4,-1)
console.log(reptilesArray)
console.log(pets)

let removedReptiles = pets.splice(4,2)
console.log(removedReptiles)
console.log(pets)
