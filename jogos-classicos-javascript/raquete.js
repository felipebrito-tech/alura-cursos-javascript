import { pincel } from './pincel.js';

export class Raquete {
    constructor(x, y, largura, altura, velocidade, alturaMesa) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.velocidade = velocidade;
        this.alturaMesa = alturaMesa;

        document.onkeydown = evento => {this.move(evento)};
    }

    desenha() {
        let cor = 'white';
        pincel.fillStyle = this.cor;
        pincel.fillRect(this.x, this.y, this.largura, this.altura);
    }

    move(evento) {
        const CIMA = 38;
        const BAIXO = 40;
        let yBaseRaquete = this.y + this.altura;
        let distanciaBordaInferior = this.alturaMesa - yBaseRaquete;

        if (evento.keyCode == CIMA && this.y > 0 )
            this.y -= (this.y < this.velocidade) ? this.y : this.velocidade;

        if (evento.keyCode == BAIXO && yBaseRaquete < this.alturaMesa)
            this.y += (distanciaBordaInferior < this.velocidade) ? distanciaBordaInferior : this.velocidade;
    }
}