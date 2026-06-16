const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Alternar entre as abas
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

// Datas dos objetivos
const tempoObjetivo1 = new Date("2026-12-15T23:59:59"); // Concluir o ensino médio
const tempoObjetivo2 = new Date("2026-11-08T18:00:00"); // Média de 700+ no ENEM
const tempoObjetivo3 = new Date("2026-10-01T23:59:59"); // Criar portfólio
const tempoObjetivo4 = new Date("2026-08-31T23:59:59"); // Ler Fúria Vermelha

const tempos = [
    tempoObjetivo1,
    tempoObjetivo2,
    tempoObjetivo3,
    tempoObjetivo4
];

function calculaTempo(tempoObjetivo) {
    const agora = new Date();
    const diferenca = tempoObjetivo - agora;

    if (diferenca <= 0) {
        return [0, 0, 0, 0];
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {

        const tempo = calculaTempo(tempos[i]);

        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = tempo[1];
        document.getElementById("min" + i).textContent = tempo[2];
        document.getElementById("seg" + i).textContent = tempo[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;