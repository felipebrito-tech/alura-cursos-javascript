import { pincel } from './pincel.js';

export class Ator {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.comprimento = 34;
        this.altura = 30;

        this.dadosIniciais = {
            x: this.x,
            y: this.y
        };

        this.atorImg = new Image(this.comprimento, this.altura);
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
        if (this._podeSeMover())
            this.y += 3;
    }

    voltaProInicio() {
        this.y = this.dadosIniciais.y;
    }

    _podeSeMover() {
        return this.y + this.altura < 394;
    }
}