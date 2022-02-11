import { pincel } from './pincel.js';

export class Mesa {
    constructor(largura, altura, cor){
        this.largura = largura;
        this.altura = altura;
        this.cor = cor;
    }

    desenha() {
        pincel.fillStyle = this.cor;
        pincel.fillRect(0, 0, this.largura, this.altura);
    }
}