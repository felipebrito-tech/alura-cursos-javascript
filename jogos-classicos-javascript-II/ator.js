import { pincel } from './pincel.js';

export class Ator {
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.atorImg = new Image(34, 30);
        this.atorImg.src = "./assets/imagens/ator-1.png";

        this.configuraMovimento();
    }

    desenha() {        
        pincel.drawImage(this.atorImg, this.x, this.y);
    }

    configuraMovimento() {
        document.onkeydown = evento => {
            const CIMA = 38;
            const BAIXO = 40;

            if (evento.keyCode == CIMA)
                this.moveParaCima();

            if (evento.keyCode == BAIXO)
                this.moveParaBaixo();
        };
    }

    moveParaCima() {
        this.y -= 3;
    }
    
    moveParaBaixo() {
        this.y += 3;
    }
}