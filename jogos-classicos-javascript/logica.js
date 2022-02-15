import { Bolinha } from './bolinha.js';
import { Mesa } from './mesa.js';
import { Placar } from './placar.js';
import { Raquete } from './raquete.js';

const trilha = new Audio('./sons/trilha.mp3');
const somPonto = new Audio('./sons/ponto.mp3');
const somRaquetada = new Audio('./sons/raquetada.mp3');

const mesa = new Mesa(600, 400, 'black');
const placar = new Placar(0, 0, mesa.altura, mesa.largura, somPonto);
const bolinha = new Bolinha(300, 200, 10, 6, 6, somRaquetada);

const raqueteJogador = new Raquete(5, 150, 10, 90, 30, mesa.altura);
moveRaqueteJogador(raqueteJogador);

const raqueteOponente = new Raquete(585, 150, 10, 90, 10, mesa.altura);

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
    if (bolinha.y < raquete.y - 10)
        raquete.moveParaCima();
    
    if (bolinha.y > raquete.y + raquete.altura + 10)
        raquete.moveParaBaixo();
}

export function draw() {
    mesa.desenha();
    placar.desenha();
    bolinha.desenha();
    raqueteJogador.desenha();
    raqueteOponente.desenha();
    trilha.play();

    bolinha.move(mesa, raqueteJogador, raqueteOponente);

    moveRaqueteOponente(raqueteOponente);

    placar.marcaPonto(bolinha);    
}