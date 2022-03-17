import { Ator } from './ator.js';
import { Carro } from './carro.js';
import { Estrada } from './estrada.js';
import { Placar } from './placar.js';


const estrada = new Estrada();
const placar = new Placar(140, 29);
const ator = new Ator(100, 366);
const carros = [
    new Carro(600, 40, 2, "./assets/imagens/carro-1.png"),
    new Carro(600, 96, 2.5, "./assets/imagens/carro-2.png"),
    new Carro(600, 150, 3.2, "./assets/imagens/carro-3.png"),
    new Carro(600, 210, 5, "./assets/imagens/carro-1.png"),
    new Carro(600, 270, 3.3, "./assets/imagens/carro-2.png"),
    new Carro(600, 318, 2.3, "./assets/imagens/carro-3.png")
]

export function draw() {
    estrada.desenha();
    placar.desenha();
    ator.desenha();

    carros.forEach(carro => {
        carro.desenha();
        carro.anda(ator);
    });

    placar.marcaPonto(ator);
}