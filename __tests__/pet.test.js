const Pet = require('./src/pet.js')

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
      expect(pet.hunger).toEqual(0);
    });
    it('has an initial fitness of 0', () => {
      expect(pet.fitness).toEqual(10);
    });
  });

describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
    it('increase the hunger by 5', () => {
      expect(pet.hunger).toEqual(5);
    });
    it('decrease the fitness by 3', () => {
      expect(pet.fitness).toEqual(-3);
    });
  });

describe('walk', () => {
  it('increases fitness to a maximum of 10', () => {
    const pet = new Pet('Fido');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
    });
  });

describe('feed', () => {
  it ('deceases hunger to a minimum of 0', () => {
    const pet = new Pet ('Fido');
    pet.hunger = 3;
    pet.feed();
    expect(pet.hunger).toEqual(0)
    });

describe('checkUp',() => {
  it('checks if fitness is 3 or less', () => {
    const pet = new Pet ('Fido');
    pet.fitness <= 3;
    expect(pet.checkUp()).toEqual('I need a walk');
    });

  it('checks if fitness is 5 or more', () => {
    const pet = new Pet ('Fido');
    pet.fitness >=5;
    expect(pet.checkUp()).toEqual('I am hungry');
    });

  it('checks if fitness is 3 or less and hunger is 5 or more', () => {
    const pet = new Pet ('Fido');
    pet.fitness <= 3 && pet.hunger >=5;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });

  it('checks if fitness is 4 or more and hunger is 4 or less' () => {
    const pet = new Pet ('Fido');
    pet.fitness <= 3 !== pet.hunger >=5;
    expect(pet.checkUp()).toEqual('I feel great!');
  });

  })
