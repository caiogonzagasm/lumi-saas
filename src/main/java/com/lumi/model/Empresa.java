package com.lumi.model;

public class Empresa {
    
    private String nome;
    private String documento;
    private boolean ativa;  

    public Empresa(String nome, String documento) {
        this.nome = nome;
        this.documento = documento;
        this.ativa = true;


    }
    
    public String getNome() {
        return nome;
    }

}

