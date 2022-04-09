//refactoring code with magic numbers
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

//new instance of Pet named 'Fido' 
const fido = new Pet('Fido');

//prototype methods created for the following actions
Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
};
Pet.prototype.feed = function() {
    this.hunger -= 3;
    if(this.hunger < MINIMUM_HUNGER){
      this.hunger = MINIMUM_HUNGER;
      end
    }
};

Pet.prototype.checkUp = function() {
  if (this.fitness <= 3 && this.hunger >=5) return 'I am hungry AND I need a walk';
  else if (this.fitness <= 3) return 'I need a walk';
  else if (this.hunger >=5) return 'I am hungry';
  else return 'i feel great!'

  
  };


module.exports = Pet;