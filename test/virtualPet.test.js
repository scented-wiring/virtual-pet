const createPet = require("../src/virtualPet.js");

describe("createPet", () => {
    it("returns input as object with name", () => {
        expect(createPet("Fred")).toEqual({
            name: "Fred"
          });
    });
});

