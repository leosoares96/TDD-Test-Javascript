const somar = (n1, n2) => n1 + n2

const procurarUsuario = (nome) => {

    jsonUser = [
        {nome: 'Leonardo'},
        {nome: 'Pamela'},
        {nome: 'Nick'}
    ];

    if(nome){
        let user = jsonUser.filter((user) => {
            user.nome === nome;
        })

        return (user == '')?'Usuário não encontrado':nome;
        
    }else{
        return 'Campo nome esta vazio'
    }
}

module.exports = {
    somar, procurarUsuario
}