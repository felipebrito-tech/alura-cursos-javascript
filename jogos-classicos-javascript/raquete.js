import { pincel } from './pincel.js';

export class Raquete {
    constructor(x, y, largura, altura, velocidade, alturaMesa) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.velocidade = velocidade;
        this.alturaMesa = alturaMesa;
        
    }

    desenha() {
        let cor = 'white';
        pincel.fillStyle = cor;
        pincel.fillRect(this.x, this.y, this.largura, this.altura);
    }

    moveParaCima() {
        if (this.y > 0)
            this.y -= (this.y < this.velocidade) ? this.y : this.velocidade;
    }

    moveParaBaixo() {
        let yBaseRaquete = this.y + this.altura;
        let distanciaBordaInferior = this.alturaMesa - yBaseRaquete;

        if (yBaseRaquete < this.alturaMesa)
            this.y += (distanciaBordaInferior < this.velocidade) ? distanciaBordaInferior : this.velocidade;
    }
}