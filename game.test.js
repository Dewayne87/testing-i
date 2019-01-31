const gameFunc = require('./gameFunctions.js');
//Arrange
const item = {
    name: 'axe',
    type: 'weapon',
    durability: 10,
    enhancement: 15
}

//Act
const newItem = gameFunc.repair(item);

//Assert
describe('the repair fucnction', () => {
    test('raisess durability to 100', () => {
        expect(newItem.durability).toEqual(100);
    })

})
