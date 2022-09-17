const sinon = require('sinon');
const { expect } = require('chai');

const producstService = require('../../../src/services/productsService');
const productsModel = require('../../../src/models/productsModel');

describe('Testa a camada service de products', () => {
  it('Testa se é retornado um objeto ao encaminhar determinado id', async () => {
    const objectReturn = {
      id: 3,
      name: "Escudo do Capitão América"
    };
    before(async () => {
      sinon.stub(productsModel, 'oneProductModel').resolves(objectReturn);
    });

    after(async () => {
      productsModel.oneProductModel.restore();
    });

    const result = await producstService.oneProductService(3);
    expect(result).to.equal(objectReturn);
  });

  it ('Testa se todos os produtos são retornados', async () => {
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
    ];
    before(async () => {
      sinon.stub(productsModel, 'allProductsModel').resolves(objectReturn);
    });

    after(async () => {
      await productsModel.allProductsModel.restore();
    });

    const result = await productsModel.allProductsModel();
    expect(result).to.equal(objectReturn);
  });

  it ('Testa se é possível registrar um determinado item', async () => {
    const entr = {
      "name": "ProdutoX"
    };
    const objectReturn = {
      "id": 4,
      "name": "ProdutoX"
    };
    before(async () => {
      sinon.stub(productsModel, 'registerProductModel').resolves(objectReturn);
    });

    after(async () => {
      await productsModel.registerProductModel.restore();
    });

    const result = await productsModel.registerProductModel(entr);
    expect(result).to.equal(objectReturn);
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
      sinon.stub(connection, 'execute').resolves(objectReturn);
    });

    after(async () => {
      await connection.execute.restore();
    });

    const result = await productsModel.updateProductModel(entr);
    expect(result.to.equal(objectReturn))
  });
});