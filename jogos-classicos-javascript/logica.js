import { Bolinha } from './bolinha.js';
import { Mesa } from './mesa.js';
import { Placar } from './placar.js';
import { Raquete } from './raquete.js';

const mesa = new Mesa(600, 400, 'black');
const placar = new Placar(0, 0, mesa.altura, mesa.largura);
const bolinha = new Bolinha(300, 200, 10, 6, 6);

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

export function draw() {
    mesa.desenha();
    placar.desenha();
    bolinha.desenha();
    raqueteJogador.desenha();
    raqueteOponente.desenha();

    bolinha.move(mesa, raqueteJogador, raqueteOponente);

    if (bolinha.y < raqueteOponente.y - 10)
        raqueteOponente.moveParaCima();
    
    if (bolinha.y > raqueteOponente.y + raqueteOponente.altura + 10)
        raqueteOponente.moveParaBaixo();

    placar.marcaPonto(bolinha);    
}