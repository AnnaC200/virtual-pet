//refactoring code with magic numbers, always at the top
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MINIMUM_AGE = 0;

//constructor function
function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
};

// getter method returns the value of the variable name and 
//placed after the constructor function, and before the first prototype method
// && operator returns true otherwise false

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  }
};

//new instance of Pet named 'Fido' 
//fido needs defining in node.js to test
const fido = new Pet('Fido');

//prototype method .growUp is part of the Pet function above when it grows up
Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

//prototype method .walk 
Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
};

//prototype method .feed
Pet.prototype.feed = function() {
    this.hunger -= 3;
    if(this.hunger < MINIMUM_HUNGER){
      this.hunger = MINIMUM_HUNGER;
      end
    }
};

//prototype method .checkUp to check for the following conditions;
Pet.prototype.checkUp = function() {
  if (this.fitness <= 3 && this.hunger >=5) return 'I am hungry AND I need a walk';
  else if (this.fitness <= 3) return 'I need a walk';
  else if (this.hunger >=5) return 'I am hungry';
  else return 'i feel great!'

  };


module.exports = Pet;