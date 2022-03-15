import { pincel } from './pincel.js';

export class Estrada {
    constructor(){
        this.estradaImg = new Image();
        this.estradaImg.src = "./assets/imagens/estrada.png";
    }

    desenha() {    
        pincel.drawImage(this.estradaImg, 0, 0);
    }
}