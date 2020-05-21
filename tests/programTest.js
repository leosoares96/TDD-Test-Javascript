const should = require('should')
const myProgram = require('../myProgram')

describe('user list ', ()=> {
    it('Somar dois numeros', ()=> {
        myProgram.somar(2,3).should.be.equal(5)
    })
    it('deve somar dois numeros diferentes e retornar 30', () => {
        myProgram.somar(20,10).should.be.equal(30)
    })
    it('Passar um nome e deve retornar: Usuário não encontrado', () => {
        myProgram.procurarUsuario('Leonardo Soares').should.be.equal('Usuário não encontrado')
    })
    it('Retorna mensagem de que o nome é obrigatorio', () => {
        myProgram.procurarUsuario('').should.be.equal('Campo nome esta vazio')
    })
})