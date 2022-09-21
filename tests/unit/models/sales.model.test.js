const sinon = require('sinon');
const { express, expect } = require('chai');

const salesModel = require('../../../src/models/salesModel');
const connection = require('../../../src/models/connection');
const mockSales = require('../mocks/mockSales');

describe('Testa a Rota Sale na camada Model', () => {
  afterEach(async () => {
    await sinon.restore();
  });

  it('Testa se são retornadas todas as vendas', async () => {
    sinon.stub(connection, 'execute').resolves([mockSales.allSales]);   
    const results = await salesModel.allSalesModel();
    expect(results).to.be.equal(mockSales.allSales);
    });

  it('Testa se é retornado um objeto ao encaminhar determinado id', async () => {
    sinon.stub(connection, 'execute').resolves([mockSales.oneSale]);
    const results = await salesModel.oneSaleModel(1);
    expect(results).to.equal(mockSales.oneSale);
  });

  it('Testa se é possível cadastrar uma venda na tabela Sales', async () => {
    const res = {};
    res.insertId = 4;
    sinon.stub(connection, 'execute').resolves([res]);
    const results = await salesModel.addSalesModel();
    expect(results).to.be.equal(res.insertId);
  });

  it('Testa se é possível cadastrar uma venda com uma lista de produtos', async () => {
    const registered = {
      id: 2,
      results: mockSales.registerSale
    };
    sinon.stub(connection, 'execute').resolves([mockSales.registerSale]);
    const results = await salesModel.addProductListModel(mockSales.registerSale, 2);
    expect(results).to.deep.equal(registered);
  });
});