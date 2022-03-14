import { Estrada } from './estrada.js';


const estrada = new Estrada(500, 400, 'black');

export function draw() {
    estrada.desenha();
}