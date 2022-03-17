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
            this.pontos++;
            this.somPonto.play();
            ator.voltaProInicio();
        }
    }

    alguemGanhou() {
        return this.pontosJogador == this.pontosVitoria || this.pontosOponente == this.pontosVitoria;
    }

    pegaTextoResultado() {
        return (this.pontosJogador == this.pontosVitoria) ? "Você ganhou!" : "Você perdeu!";
    }

    reseta() {
        this.pontosJogador = this.dadosIniciais.pontosJogador;
        this.pontosOponente = this.dadosIniciais.pontosOponente;
    }
}