class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

function compararPessoas (p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome +  ' é mais velho(a) que ' + p2.nome);
    }else if(p1.idade < p2.idade){
        console.log(p2.nome +  ' é mais velho(a) que ' + p1.nome);
    }else{
        console.log(p2.nome + ' e ' + p1.nome + ' tem a mesma idade');
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 25);

compararPessoas(vitor, renan);
