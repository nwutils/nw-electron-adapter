// const fs = jest.requireActual('fs');

const fsMock = Object.assign({}, {
  existsSync: jest.fn(),
  mkdirSync: jest.fn()
});

module.exports = fsMock;
