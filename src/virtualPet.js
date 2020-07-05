const createPet = (petName) => {
    const pet = new Object({
        name: petName
    });
    return pet;
};
module.exports = createPet;