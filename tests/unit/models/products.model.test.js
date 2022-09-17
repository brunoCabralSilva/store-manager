const sinon = require('sinon');
const { express, expect } = require('chai');
const productsModel = require('../../../src/models/productsModel');
const connection = require('../../../src/models/connection');

describe('Testa a Model de products', () => {
  if ('Testa se ao digitar um id, é retornado o valor esperado do item com este id ', async () => {
    before(async () => {
      const objectReturn = {
        "id": 3,
        "name": "Escudo do Capitão América"
      };
      sinon.stub(connection, 'execute').resolves([objectReturn]);
    });

    after(async () => {
      await connection.execute.restore();
    });
    const result = await productsModel.oneProductModel();
    expect(result.to.equal(objectReturn))
  });

  if ('Testa se todos os produtos são retornados', async () => {
    before(async () => {
      const objectReturn = [
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
      ]
      sinon.stub(connection, 'execute').resolves([objectReturn]);
    });

    after(async () => {
      await connection.execute.restore();
    });

    const result = await productsModel.allProductsModel();
    expect(result.to.equal(objectReturn))
  });

  if ('Testa se é possível registrar um determinado item', async () => {
    before(async () => {
      const entr = {
        "name": "ProdutoX"
      };
      const objectReturn = {
        "id": 4,
        "name": "ProdutoX"
      };
      sinon.stub(connection, 'execute').resolves([objectReturn]);
    });

    after(async () => {
      await connection.execute.restore();
    });

    const result = await productsModel.registerProductModel(entr);
    expect(result.to.equal(objectReturn))
  });

  if ('Testa se é possível atualizar um determinado item', async () => {
    before(async () => {
      const entr = {
        "name": "Martelo do Batman"
      };
      const objectReturn = {
        "id": 3,
        "name": "Martelo do Batman"
      };
      sinon.stub(connection, 'execute').resolves([objectReturn]);
    });

    after(async () => {
      await connection.execute.restore();
    });

    const result = await productsModel.updateProductModel(entr);
    expect(result.to.equal(objectReturn))
  });
});


// deleteProductModel