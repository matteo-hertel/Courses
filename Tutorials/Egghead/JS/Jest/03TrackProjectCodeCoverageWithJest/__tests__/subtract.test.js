const subtract = require("./../src/subtract.js");

test("Subtracts 12 - 4 equals 8", () => {
    expect(subtract(12, 4)).toBe(8);
});
