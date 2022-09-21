// const sinon = require('sinon');
// const { expect } = require('chai');

// const salesService = require('../../../src/services/salesService');
// const stubs = require('../../../src/models/salesModel');

// describe('Testa a Rota Sale na camada Service', () => {
//   const objectReturn = [
//     {
//       "saleId": 1,
//       "date": "2022-09-18T17:05:01.000Z",
//       "productId": 1,
//       "quantity": 5
//     },
//     {
//       "saleId": 1,
//       "date": "2022-09-18T17:05:01.000Z",
//       "productId": 2,
//       "quantity": 10
//     },
//     {
//       "saleId": 2,
//       "date": "2022-09-18T17:05:01.000Z",
//       "productId": 3,
//       "quantity": 15
//     }
//   ];

//   before(async () => {
//     sinon.stub(stubs, 'allSalesModel').resolves(objectReturn);
//   });

//   after(async () => {
//     sinon.restore();
//   });

//   it('Testa se são retornadas todas as vendas', async () => {
//     const results = await salesService.allSalesService();
//     expect(results).to.equal(objectReturn);
//   });
// });