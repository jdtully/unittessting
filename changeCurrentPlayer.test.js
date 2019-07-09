const changeCurrentPlayer = require('./changeCurrentPlayer');
test('takes blue and  returns  red', () => {
    expect(changeCurrentPlayer("blue")).toBe("red");
});