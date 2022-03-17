import { Ator } from './ator.js';
import { Carro } from './carro.js';
import { Estrada } from './estrada.js';
import { pincel } from './pincel.js';
import { Placar } from './placar.js';

const trilha = new Audio('./assets/sons/trilha.mp3');

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

let jogoJaComecou = false;
document.onkeypress = evento => { if (evento.keyCode == 13) jogoJaComecou = true; }

function escreveNaTela(texto) {
    pincel.font = "28px Impact";
    pincel.fillStyle = "white";
    pincel.textAlign = "center";
    pincel.fillText(texto, 400, 29);
}

export function draw() {
    estrada.desenha();
    placar.desenha();
    
    if (jogoJaComecou) {
        ator.desenha();
        trilha.play();
        
        carros.forEach(carro => {
            carro.desenha();
            carro.anda(ator, placar);
        });
        
        placar.marcaPonto(ator);
    }
    else {
        ator.voltaProInicio();
        escreveNaTela("Tecle ENTER para nova partida!");
    }
}