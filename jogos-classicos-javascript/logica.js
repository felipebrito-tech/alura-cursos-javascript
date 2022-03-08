import { Bolinha } from './bolinha.js';
import { Jogo } from './jogo.js';
import { Mesa } from './mesa.js';
import { Placar } from './placar.js';
import { Raquete } from './raquete.js';

const trilha = new Audio('./sons/trilha.mp3');
const somPonto = new Audio('./sons/ponto.mp3');
const somRaquetada = new Audio('./sons/raquetada.mp3');

const mesa = new Mesa(600, 400, 'black');
const placar = new Placar(0, 0, 4, mesa.altura, mesa.largura, somPonto);
const bolinha = new Bolinha(300, 200, 10, 6, 6, somRaquetada);

const raqueteJogador = new Raquete(5, 150, 10, 90, 30, mesa.altura);
moveRaqueteJogador(raqueteJogador);

const raqueteOponente = new Raquete(585, 150, 10, 90, 10, mesa.altura);

const jogo = new Jogo(placar, bolinha, raqueteJogador, raqueteOponente);
document.onkeypress = evento => { if (evento.keyCode == 13) jogo.comeca(); }

function moveRaqueteJogador(raquete) {
    document.onkeydown = evento => {
        const CIMA = 38;
        const BAIXO = 40;

        if (evento.keyCode == CIMA)
            raquete.moveParaCima();

        if (evento.keyCode == BAIXO)
            raquete.moveParaBaixo();
    };
}

function moveRaqueteOponente(raquete) {
    let chanceDeErrar = Math.floor(Math.random() * raquete.altura/2);

    if (bolinha.y < raquete.y - chanceDeErrar)
        raquete.moveParaCima();
    
    if (bolinha.y > raquete.y + raquete.altura + chanceDeErrar)
        raquete.moveParaBaixo();
}

export function draw() {
    mesa.desenha();
    placar.desenha();
    bolinha.desenha();
    raqueteJogador.desenha();
    raqueteOponente.desenha();
    
    if(jogo.jaComecou()) {
        trilha.play();
    
        bolinha.move(mesa, raqueteJogador, raqueteOponente);
    
        moveRaqueteOponente(raqueteOponente);
    
        placar.marcaPonto(bolinha);
    
        if (placar.alguemGanhou())
            jogo.termina();
    }
}