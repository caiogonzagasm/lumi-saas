interface Empresa {
    nome: string;
    documento: string;
    ativa: boolean;
}

const empresa: Empresa = {
    nome: "Lumi",
    documento: "123456789",
    ativa: true
};

console.log (empresa.nome);

function mostrarEmpresa(empresa: Empresa): void {

    console.log("Nome da empresa: " + empresa.nome);

}

mostrarEmpresa(empresa);

const outraCoisa = {
    nome: "Outra Coisa",
    documento: "987654321",
    ativa: true
};

function obterNomeEmpresa (empresa: Empresa): string {
    return empresa.nome;
}

const nomeObtido = obterNomeEmpresa(empresa);

console.log(nomeObtido);