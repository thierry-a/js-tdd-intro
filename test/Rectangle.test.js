// Rectangle.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {

  it('vérifier qu elle renvoie true sur instance créée avec deux côtés de même longueur et false dans le cas contraire', () => {

    const rectangleT = new Rectangle(5, 5);
    assert.strictEqual(rectangleT.isSquare(), true);
    const rectangleF = new Rectangle(10, 5);
    assert.strictEqual(rectangleF.isSquare(), false);
  });

  it('vérifier qu elle renvoie bien la surface du rectangle', () => {

    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getArea(), 50);
  });

  it('vérifier qu elle renvoie bien la superficie du rectangle', () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getPerimeter(), 30);
  });
});
