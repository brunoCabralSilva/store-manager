const sinon = require('sinon');
const { expect } = require('chai');

const productController = require('../../../src/controllers/productsControl');
const productService = require('../../../src/services/productsService');

describe('Testa a Rota Products na camada Control', () => {
  
  const objectReturn = { id: 3, name: 'Escudo do Capitão América' };

  before(async () => {
    sinon.stub(productService, 'oneProductService').resolves(objectReturn);
  });

  after(async () => {
    productService.oneProductService.restore();
  });

  it('Testa se é retornado status 200 ao retornar resposta para determinado id', async () => {
    const req = { params: { id: 3 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    await productController.oneProductControl(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});