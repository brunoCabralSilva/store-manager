const sinon = require('sinon');
const { express } = require('chai');

const salesService = require('../../../src/services/salesService');
const stubs = require('../../../src/models/salesModel');

describe('Teste da camada Control', () => {
  it('Testa se é retornado um objeto ao encaminhar determinado id', async () => {
    const objectReturn = [
      {
        "date": "2022-09-17T19:24:49.000Z",
        "productId": 1,
        "quantity": 5
      },
      {
        "date": "2022-09-17T19:24:49.000Z",
        "productId": 2,
        "quantity": 10
      }
    ];

    before(async () => {
      sinon.stub(stubs, 'oneSaleModel').resolves(objectReturn);
    });

    after(async () => {
      stubs.oneSaleModel.restore();
    });

    const results = await salesService.oneSaleService(1);
    expect(results).to.equal(objectReturn);
  });

  it('Testa se são retornadas todas as vendas', async () => {
    const objectReturn = [
      {
        "saleId": 1,
        "date": "2022-09-17T19:24:49.000Z",
        "productId": 1,
        "quantity": 5
      },
      {
        "saleId": 1,
        "date": "2022-09-17T19:24:49.000Z",
        "productId": 2,
        "quantity": 10
      },
      {
        "saleId": 2,
        "date": "2022-09-17T19:24:49.000Z",
        "productId": 3,
        "quantity": 15
      }
    ];
    before(async () => {
      sinon.stub(stubs, 'allSalesModel').resolves(objectReturn);
    });

    after(async () => {
      stubs.allSalesModel.restore();
    });

    const results = await salesService.allSalesModel();
    expect(results).to.equal(objectReturn);
  });

});