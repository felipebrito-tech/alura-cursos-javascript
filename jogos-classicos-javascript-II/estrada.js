import { pincel } from './pincel.js';

export class Estrada {
    constructor(largura, altura, cor){
        this.largura = largura;
        this.altura = altura;
        this.cor = cor;
    }

    desenha() {
        let estradaImg = new Image();
        estradaImg.src = "./assets/imagens/estrada.png";
        
        estradaImg.onload = () => pincel.drawImage(estradaImg, 0, 0);
    }
}