const sinon = require('sinon');
const { expect } = require('chai');

const producstService = require('../../../src/services/productsService');
const productsModel = require('../../../src/models/productsModel');

describe('Testa a camada service de products', () => {
  const allproducts = [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América"
    }
  ];

  before(async () => {
    sinon.stub(productsModel, 'allProductsModel').resolves(allproducts);
  });

  after(async () => {
    sinon.restore();
  });

  it('Testa se todos os produtos são retornados', async () => {
    const result = await productsModel.allProductsModel();
    expect(result).to.equal(allproducts);
  });
});