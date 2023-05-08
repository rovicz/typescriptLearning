"use strict";
class Produto {
    // public: é o padrão de qualquer uma
    // private: só pode ser acessada dentro da classe
    tipo = "produto";
    // protected: só pode ser acessada dentro da classe e subclasses
    preco;
    // readonly: só permite leitura
    nome;
    constructor(nome, preco) {
        this.nome = nome;
        this.tipo;
        this.preco = preco;
    }
    getTipo() {
        return this.tipo;
    }
    getPreco() {
        return Produto.transformarPreco(this.preco);
    }
    // [javascript] static: não fará parte do Objeto criado
    // e sim da função construtora (classe)
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
} // as classes/funções construtoras são responsáveis pela construção de objetos que já vimos, como 'MouseEvent', 'HTMLElement' e os demais.
const livro = new Produto("Star Wars: O Império Contra-Ataca", 50);
console.log(livro.nome); // Star Wars
console.log(livro.getTipo()); // produto.
console.log(livro.getPreco()); // R$50.
console.log(Produto.transformarPreco(100)); // R$100.
// Class e Interface:
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach((forma) => {
    if (forma instanceof Quadrado) {
        console.log(forma.getArea());
    }
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetro());
    }
});
