const Pet = require('../src/pet.js')
//require the pet function into this test file to link 
//also at the beginning on node.js 

//testing that the pet function returns an object
describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });

    it('has an initial age of 0', () => {
      const pet = new Pet ('Fido');
      expect(pet.age).toEqual(0); 
    });

    it('has an initial hunger of 0', () => {
      const pet = new Pet ('Fido');
      expect(pet.hunger).toEqual(0);
    });
  });


describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });

    it('increase the hunger by 5', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
    }); 

    it('decrements the fitness by 3', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.fitness).toEqual(7);
    });
  });



describe('walk', () => {
    it('increases fitness to a maximum of 10', () => {
      const pet = new Pet('Fido');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

    it('throws an error if pet is not alive', () => {
      const pet = new Pet ('Fido');
      pet.age = 30
      expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
    });
  });

describe('feed', () => {
    it ('deceases hunger to a minimum of 0', () => {
      const pet = new Pet ('Fido');
      pet.hunger = 3;
      pet.feed();
      expect(pet.hunger).toEqual(0)
    });

    it('throws an error if pet is not alive', () => {
      const pet = new Pet ('Fido');
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });

describe('checkUp',() => {
    it('checks if fitness is 3 or less', () => {
      const pet = new Pet('Fido');
      pet.fitness = 3;
      expect(pet.checkUp()).toEqual('I need a walk');
    });

    it('checks if hunger is 5 or more', () => {
      const pet = new Pet ('Fido');
      pet.hunger = 5;
      expect(pet.checkUp()).toEqual('I am hungry');
    });

    it('checks if fitness is 3 or less and hunger is 5 or more', () => {
      const pet = new Pet ('Fido');
      pet.fitness = 3;
      pet.hunger = 5;
      expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });

    it('checks if fitness is 4 or more and hunger is 4 or less', () => {
      const pet = new Pet ('Fido');
      pet.fitness = 4;
      pet.hunger = 4;
      expect(pet.checkUp()).toEqual('I feel great!');
    });
});

describe('isAlive', () => {
  it('checks if pet fitness is <= 0, it should return false', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0;
    expect(pet.isAlive).toEqual(false);
  });

  it('checks if pet hunger is >= 10, it should return false', () => {
    const pet = new Pet ('Fido');
    pet.hunger = 11;
    expect(pet.isAlive).toEqual(false);
  });

  it('checks if pet age is >= 30, it should return false', () => {
    const pet =new Pet ('Fido');
    pet.age = 30;
    expect(pet.isAlive).toEqual(false);
  });
});