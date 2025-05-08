// Parent constructor function
function Animal(name, speed) {
  this.name = name;
  this.speed = speed;
}

// Method to increase speed
Animal.prototype.run = function (speedIncrease) {
  this.speed += speedIncrease;
  console.log(`${this.name} is running at speed ${this.speed}`);
};

// Static method to compare speeds
Animal.compareBySpeed = function (a1, a2) {
  return a1.speed - a2.speed;
};

// Child constructor function
function Rabbit(name, speed) {
  Animal.call(this, name, speed); // Call parent constructor
}

// Inherit from Animal
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

// Rabbit-specific method
Rabbit.prototype.hide = function () {
  console.log(`${this.name} hides`);
};

// Test cases
let rabbit = new Rabbit('Whitey', 10);
rabbit.run(5); // Whitey is running at speed 15
rabbit.hide(); // Whitey hides

let rabbit2 = new Rabbit('Brownie', 8);
console.log(Animal.compareBySpeed(rabbit, rabbit2)); // Compare speed difference
