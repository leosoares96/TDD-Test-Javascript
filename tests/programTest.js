const should = require('should')
const myProgram = require('../myProgram')

describe('user list ', ()=> {
    it('Somar dois numeros', ()=> {
        myProgram.somar(2,3).should.be.equal(5)
    })
    it('deve somar dois numeros diferentes e retornar 30', () => {
        myProgram.somar(20,10).should.be.equal(30)
    })
})