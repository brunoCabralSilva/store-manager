const sinon = require('sinon');
const { express } = require('chai');

const productController = require('../../../src/controllers/productsControl');
const productService = require('../../../src/services/productsService');

describe('Teste da camada Control', () => {
  it('Testa se é retornado um objeto ao encaminhar determinado id', async () => {
    const objectReturn = {
      id: 3,
      name: "Escudo do Capitão América"
    };
    before(async () => {
      sinon.stub(productService, 'oneProductModel').resolves(objectReturn);
    });

    after(async () => {
      productService.oneProductModel.restore();
    });

    const result = await productController.oneProductService(3);
    expect(result).to.equal(objectReturn);
  });

});