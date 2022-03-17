import { pincel } from "./pincel.js";

export class Jogo {
    constructor(mesa, placar, bolinha, raqueteJogador, raqueteOponente){
        this.mesa = mesa;
        this.placar = placar;
        this.bolinha = bolinha;
        this.raqueteJogador = raqueteJogador;
        this.raqueteOponente = raqueteOponente;
        this.comecou = false;
    }

    jaComecou() {
        return this.comecou;
    }

    comeca() {
        this.comecou = true;
        this.placar.reseta();
        this.bolinha.reseta();
    }

    termina() {
        this.comecou = false;
    }

    escreveNaTela(texto, font, quadranteY) {
        pincel.font = font;
        pincel.fillStyle = "white";
        pincel.textAlign = "center";
        pincel.fillText(texto, this.mesa.largura/2, quadranteY*this.mesa.altura/8);
    }
}