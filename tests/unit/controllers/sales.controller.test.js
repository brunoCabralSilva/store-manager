const sinon = require('sinon');
const { express } = require('chai');

const salesControl = require('../../../src/controllers/salesControl');
const stubs = require('../../../src/services/salesService');

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
      sinon.stub(stubs, 'oneSaleService').resolves(objectReturn);
    });

    after(async () => {
      stubs.oneSaleService.restore();
    });

    const results = await salesControl.oneSaleControl(1);
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
      sinon.stub(stubs, 'allSalesService').resolves(objectReturn);
    });

    after(async () => {
      stubs.allSalesService.restore();
    });

    const results = await salesControl.allSalesControl();
    expect(results).to.equal(objectReturn);
  });

});