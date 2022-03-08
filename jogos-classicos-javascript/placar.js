import { pincel } from './pincel.js';

export class Placar {
    constructor(pontosJogador, pontosOponente, pontosVitoria, alturaMesa, larguraMesa, somPonto) {
        this.pontosJogador = pontosJogador;
        this.pontosOponente = pontosOponente;
        this.pontosVitoria = pontosVitoria;
        this.alturaMesa = alturaMesa;
        this.larguraMesa = larguraMesa;
        this.somPonto = somPonto;

        this.dadosIniciais = {
            pontosJogador: pontosJogador,
            pontosOponente: pontosOponente
        };
    }

    desenha() {
        let metadeDaMesa = this.larguraMesa / 2;

        this._desenhaPlacar(this.pontosJogador, metadeDaMesa - 35, metadeDaMesa - 20);
        this._desenhaPlacar(this.pontosOponente, metadeDaMesa + 5, metadeDaMesa + 20);
    }

    marcaPonto(bolinha) {
        let jogadorMarcouPonto = bolinha.x + bolinha.raio > 586;
        let oponenteMarcouPonto = bolinha.x - bolinha.raio < 4;

        if (jogadorMarcouPonto) this.pontosJogador++;
        
        if (oponenteMarcouPonto) this.pontosOponente++;

        if (jogadorMarcouPonto || oponenteMarcouPonto) {
            this.somPonto.play();

            if (!this.alguemGanhou())
                bolinha.reseta();
        }
    }

    alguemGanhou() {
        return this.pontosJogador == this.pontosVitoria || this.pontosOponente == this.pontosVitoria;
    }

    reseta() {
        this.pontosJogador = this.dadosIniciais.pontosJogador;
        this.pontosOponente = this.dadosIniciais.pontosOponente;
    }

    _desenhaPlacar(pontuacao, xPlacar, xTexto) {
        pincel.fillStyle = 'orange';
        pincel.fillRect(xPlacar, 4, 30, 30);

        pincel.font = "20px Comic Sans MS";
        pincel.fillStyle = "white";
        pincel.textAlign = "center";
        pincel.fillText(pontuacao, xTexto, 27);
    }
}