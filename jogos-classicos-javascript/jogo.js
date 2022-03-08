export class Jogo {
    constructor(placar, bolinha, raqueteJogador, raqueteOponente){
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
}