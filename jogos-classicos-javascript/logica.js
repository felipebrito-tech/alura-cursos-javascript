import { Bolinha } from './bolinha.js';
import { Mesa } from './mesa.js';
import { Raquete } from './raquete.js';

const mesa = new Mesa(600, 400, 'black');
const bolinha = new Bolinha(300, 200, 10, 6, 6);
const raqueteJogador = new Raquete(5, 150, 10, 90, 30, mesa.altura);

export function draw() {
    mesa.desenha();
    bolinha.desenha();
    raqueteJogador.desenha();

    bolinha.move(mesa, raqueteJogador);
}