const gameFunc = require('./gameFunctions.js');
//Arrange

const rock = {
    name: 'Rock',
    type: 'weapon',
    durability: 50,
    enhancement: '+13'
}

const paper = {
    name: 'Paper',
    type: 'weapon',
    durability: 50,
    enhancement: '+15'
}
const scissors = {
    name: 'Scissors',
    type: 'weapon',
    durability: 50,
    enhancement: 'TRI'
}

const butterKnife = {
    name: 'Butter Knife',
    type: 'weapon',
    durability: 20,
    enhancement: '+13'
}
const brokenBottle = {
    name: 'Broken Bottle',
    type: 'weapon',
    durability: 5,
    enhancement: '+15'
}

//Act
const repairedRock = gameFunc.repair(rock);
const failRock = gameFunc.fail(rock);
const failPaper = gameFunc.fail(paper);
const failScissors = gameFunc.fail(scissors);
const successRock = gameFunc.success(rock);
//Assert
describe('the repair function', () => {
    test('raises durability to 100', () => {
        expect(repairedRock.durability).toEqual(100);
    })

})

describe('the fail functions', () => {
    test('durability of item decreased by 5 if enhancement is between 0 and 14', () => {
        expect(failRock.durability).toEqual(45);
    });
    test('durability of item decreased by 10 if enhancement is greater than 14', () => {
        expect(failPaper.durability).toEqual(40);
    });
    test('enhancement of item decreased by 1 if enhancement is greater than 16', () => {
        expect(failScissors.enhancement).toEqual('DUO');
    });
    test('name is updated to reflect new enhancement level if it was decreased', () => {
        expect(failScissors.name).toEqual('[DUO] Scissors');
    });
    test('If the items enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25', () => {
        expect(() => {
            gameFunc.fail(butterKnife);
        }).toThrow();
    });
    test('If the items enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10', () => {
        expect(() => {
            gameFunc.fail(brokenBottle);
        }).toThrow();
    });


})


describe('the success functions', () => {
    test('If enhancment less than 15 increase by 1', () => {
        expect(successRock.enhancement).toEqual('+14');
    });
    test('The name is updated to reflect the new enhancement level', () => {
        expect(successRock.name).toEqual('+14 Rock');
    })

})
