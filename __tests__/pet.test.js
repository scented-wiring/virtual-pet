const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });

    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });
  });

describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');

      pet.growUp();

      expect(pet.age).toEqual(1);
    });

    it('increments hunger by 5', () => {
      const pet = new Pet('Fido');

      pet.growUp();

      expect(pet.hunger).toEqual(5);
    });

    it('decreases fitness by 3', () => {
      const pet = new Pet('Fido');

      pet.growUp();

      expect(pet.fitness).toEqual(7);
    });

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.hunger = 10;

      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(')
    })
});

describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it('increases fitness to a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.fitness = 0;

    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(')
  })
});

describe('feed', () => {
  it('decreases hunger by 3', () => {
    const pet = new Pet('Fido');

    pet.hunger = 7;
    pet.feed();

    expect(pet.hunger).toEqual(4);
  });

  it('decreases hunger to a minimum of 0', () => {
    const pet = new Pet('Fido');

    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(')
  })
});

describe('checkUp', () => {
  it('returns message if fitness 3 or less', () => {
    const pet = new Pet('Fido');

    pet.fitness = 2;

    expect(pet.checkUp()).toEqual('I need a walk.');
  });

  it('returns message if hunger 5 or more', () => {
    const pet = new Pet('Fido');

    pet.hunger = 6;

    expect(pet.checkUp()).toEqual('I am hungry.');
  });

  it('returns message if hunger over 5 & fitness less than 3', () => {
    const pet = new Pet('Fido');

    pet.hunger = 6;
    pet.fitness = 2;

    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk.');
  });
  
  it('returns message if hunger less than 5 & fitness more than 3', () => {
    const pet = new Pet('Fido');

    expect(pet.checkUp()).toEqual('I feel great!');
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(')
  })
});

describe('isAlive', () => {
  it('returns true if pet is alive', () => {
    const pet = new Pet('Fido');;

    expect(pet.isAlive).toEqual(true);
  });

  it('returns false if pet is dead', () => {
    const pet = new Pet('Fido');

    pet.fitness = 0;
    pet.hunger = 10;
    pet.age = 30;

    expect(pet.isAlive).toEqual(false);
  });
});

describe('haveBaby', () => {
  it('causes parent to have baby', () => {
    const parent = new Pet('Dave');

    parent.haveBaby('Amelia');

    expect(parent.children[0].name).toEqual('Amelia');
  })
})

