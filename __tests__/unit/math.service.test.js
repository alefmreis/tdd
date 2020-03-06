const Math = require('../../src/services/math.service');

describe('Application service math', () => {
  const math = new Math();

  it('should return a number 4', () => {
    const result = math.sum(2, 2);
    expect(result).toEqual(4);
  });

  it("should return a message 'only number parameters'", () => {
    try {
      math.sum(2, '2');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual('only number parameters');
    }    
  });
});
