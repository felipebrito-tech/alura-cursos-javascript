import { pincel } from './pincel.js';

export class Bolinha {
    constructor(x, y, raio, velocidadeX, velocidadeY, somRaquetada) {
        this.x = x;
        this.y = y;
        this.raio = raio;
        this.velocidadeX = velocidadeX;
        this.velocidadeY = velocidadeY;
        this.somRaquetada = somRaquetada;
        this.cor = 'white';
    }

    desenha() {
        pincel.fillStyle = this.cor;
        pincel.beginPath();
        pincel.arc(this.x, this.y, this.raio, 0, 2 * 3.14);
        pincel.fill();
    }

    move(mesa, raqueteJogador, raqueteOponente) {
        this.x += this.velocidadeX;
        this.y += this.velocidadeY;

        this.verificaColisaoBorda(mesa);
        this.verificaColisaoRaqueteJogador(raqueteJogador);
        this.verificaColisaoRaqueteOponente(raqueteOponente);
    }

    verificaColisaoBorda(mesa) {
        if (this.x + this.raio > mesa.largura
            || this.x - this.raio < 0) this.velocidadeX *= -1;
    
        if (this.y + this.raio > mesa.altura
                || this.y - this.raio < 0) this.velocidadeY *= -1;
    }

    verificaColisaoRaqueteJogador(raquete) {
        if (this.x - this.raio < raquete.x + raquete.largura
            && this.y - this.raio < raquete.y + raquete.altura
            && this.y + this.raio > raquete.y) {
                this.somRaquetada.play();
                this.velocidadeX *= -1;
            }
    }

    verificaColisaoRaqueteOponente(raquete) {
        if (this.x + this.raio > raquete.x
            && this.y - this.raio < raquete.y + raquete.altura
            && this.y + this.raio > raquete.y) {
                this.somRaquetada.play();
                this.velocidadeX *= -1;
            }
    }

    resetarPosicao(xInicial, yInicial) {
        this.x = xInicial;
        this.y = yInicial;
    }
}