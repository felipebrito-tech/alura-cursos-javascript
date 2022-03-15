import { pincel } from './pincel.js';

export class Carro {
    constructor(x, y, velocidade, carroImgSrc){
        this.x = x;
        this.y = y;
        this.velocidade = velocidade;

        this.dadosIniciais = {
            x: this.x
        };

        this.carroImg = new Image(73, 40);
        this.carroImg.src = carroImgSrc;
    }

    desenha() {        
        pincel.drawImage(this.carroImg, this.x, this.y);
    }

    anda() {
        this.x -= this.velocidade;

        if (this.x < -73) this.x = this.dadosIniciais.x;
    }
}