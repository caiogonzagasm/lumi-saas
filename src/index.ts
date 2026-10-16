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

const empresas: Empresa[] = [empresa, outraCoisa];
empresas.forEach((empresaAtual) => {
console.log(empresaAtual.nome);
});

const primeiraEmpresa = empresas[0];
if(primeiraEmpresa) {
    console.log(primeiraEmpresa.nome);
}

const empresaEncontrada = empresas.find((empresaAtual) => {
    return (empresaAtual.nome === "Lumi")

});

