const sinon = require('sinon');
const { expect } = require('chai');

const salesControl = require('../../../src/controllers/salesControl');
const stubs = require('../../../src/services/salesService');

describe('Testa a Rota Sales na camada Control', () => {
  const objectId = [
    {
      "date": "2022-09-18T14:45:17.000Z",
      "productId": 1,
      "quantity": 5
    },
    {
      "date": "2022-09-18T14:45:17.000Z",
      "productId": 2,
      "quantity": 10
    }
  ];

  const allSales = [
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
    sinon.stub(stubs, 'oneSaleService').resolves(objectId);
    sinon.stub(stubs, 'allSalesService').resolves(allSales);
  });

  after(async () => {
    sinon.restore();
  });

  it('Testa se é retornado um objeto ao encaminhar determinado id', async () => {
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    const results = await salesControl.oneSaleControl(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });

  it('Testa se são retornadas todas as vendas', async () => {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    const results = await salesControl.allSalesControl(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});