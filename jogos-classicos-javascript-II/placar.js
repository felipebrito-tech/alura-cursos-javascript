import { pincel } from './pincel.js';

export class Placar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pontos = 0;
        this.somPonto = new Audio('./assets/sons/pontos.wav');
    }

    desenha() {
        pincel.font = "30px Impact";
        pincel.fillStyle = "yellow";
        pincel.textAlign = "center";
        pincel.fillText(this.pontos, this.x, this.y);
    }

    marcaPonto(ator) {
        let marcouPonto = ator.y < 10;

        if (marcouPonto) {
            this.somPonto.play();
            this.pontos++;
            ator.voltaProInicio();
        }
    }

    perdePonto() {
        if (this.pontos > 0)
            this.pontos--;
    }
}