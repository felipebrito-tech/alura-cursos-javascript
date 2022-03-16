import { pincel } from './pincel.js';

export class Carro {
    constructor(x, y, velocidade, carroImgSrc){
        this.x = x;
        this.y = y;
        this.velocidade = velocidade;
        this.comprimento = 73;
        this.altura = 40;

        this.dadosIniciais = {
            x: this.x
        };

        this.carroImg = new Image(this.comprimento, this.altura);
        this.carroImg.src = carroImgSrc;
    }

    desenha() {        
        pincel.drawImage(this.carroImg, this.x, this.y);
    }

    anda(ator) {
        this.x -= this.velocidade;

        this.verificaColisao(ator);

        if (this._chegouNoFimDaEstrada()) this.x = this.dadosIniciais.x;
    }

    verificaColisao(ator) {
        if (ator.x + ator.comprimento > this.x
            && ator.x < this.x + this.comprimento
            && ator.y < this.y + this.altura
            && ator.y + ator.altura > this.y) {
                ator.voltaProInicio();
            }
    }

    _chegouNoFimDaEstrada() {
        return this.x < -this.comprimento;
    }
}