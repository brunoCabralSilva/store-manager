const sinon = require('sinon');
const { express, expect } = require('chai');
const productsModel = require('../../../src/models/productsModel');
const connection = require('../../../src/models/connection');
const mockProduct = require('../mocks/mockProduct');

describe('Testa a Rota Products na camada Model', () => {
  afterEach(async () => {
    await sinon.restore();
  });
  
  it('Testa se todos os produtos são retornados', async () => {
    sinon.stub(connection, 'execute').resolves([mockProduct.allProducts]);
    const result = await productsModel.allProductsModel();
    expect(result).to.equal(mockProduct.allProducts);
  });

  it ('Testa se ao digitar um id, é retornado o valor esperado do produto com este id ', async () => {
    sinon.stub(connection, 'execute').resolves([[mockProduct.productById]]);
    const result = await productsModel.oneProductModel(3);
    expect(result).to.equal(mockProduct.productById);
  });

  it ('Testa se é possível registrar um determinado produto', async () => {
    sinon.stub(connection, 'execute').resolves([[mockProduct.entrReturnProduct]]);
    const result = await productsModel.registerProductModel(mockProduct.entrProduct);
    expect(result).to.equal(mockProduct.entrReturnProduct);
  });

  it ('Testa se é possível atualizar um determinado produto', async () => {
    sinon.stub(connection, 'execute').resolves([[mockProduct.updatedProduct]]);
    const result = await productsModel.updateProductModel(mockProduct.updateProductRequest);
    expect(result).to.equal(mockProduct.updatedProduct);
  });

  it('Testa se é possível deletar um produto', async () => {
    sinon.stub(connection, 'execute').resolves(true);
    const result = await productsModel.deleteProductModel(2);
    expect(result).to.be.true;
  });
});
