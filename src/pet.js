const MAX_FITNESS = 10;
const errorDead = 'Your pet is no longer alive :(';

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAX_FITNESS;
    this.children = [];
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw errorDead;
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw errorDead;
    }
    
    if ((this.fitness + 4) <= MAX_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAX_FITNESS;
    }
}

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw errorDead;
    }

    if ((this.hunger - 3) >= 0) {
        this.hunger -= 3;
    } else {
        this.hunger = 0;
    }
}

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw errorDead;
    }

    if ((this.hunger < 5) && (this.fitness > 3)) {
        return 'I feel great!';
    }

    if ((this.hunger >= 5) && (this.fitness <= 3)) {
        return 'I am hungry AND I need a walk.'
    }

    if (this.fitness <= 3) {
        return 'I need a walk.';
    }

    if (this.hunger >= 5) {
        return 'I am hungry.'
    }
}

Pet.prototype.haveBaby = function (name) {
    this.children.push(new Pet(name));
}

module.exports = Pet;