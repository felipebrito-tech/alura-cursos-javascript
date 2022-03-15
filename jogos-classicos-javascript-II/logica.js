import { Ator } from './ator.js';
import { Carro } from './carro.js';
import { Estrada } from './estrada.js';


const estrada = new Estrada();
const ator = new Ator(100, 366);
const carros = [
    new Carro(600, 40, 2, "./assets/imagens/carro-1.png"),
    new Carro(600, 96, 2.5, "./assets/imagens/carro-2.png"),
    new Carro(600, 150, 3.2, "./assets/imagens/carro-3.png")
]

export function draw() {
    estrada.desenha();
    ator.desenha();

    carros.forEach(carro => {
        carro.desenha();
        carro.anda();
    });
}