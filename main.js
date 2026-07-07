const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Lógica das Abas (Mantida idêntica à sua, pois já está ótima)
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

// --- Lógica do Contador Regressivo Constante ---

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-12-18T00:00:00");
const tempoObjetivo2 = new Date("2027-03-02T00:00:00");
const tempoObjetivo3 = new Date("2026-11-08T00:00:00");
const tempoObjetivo4 = new Date("2027-03-15T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// 1. Criamos uma função para atualizar a tela de todos os contadores
function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
  }
}

// 2. Sua função de cálculo adaptada com uma melhoria visual
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;

  // Se o tempo já passou, exibe uma mensagem em vez de números negativos
  if (tempoFinal < 0) {
    return "Prazo Encerrado!";
  }

  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  
  // Usando Template Literals (as crases ``) para facilitar a leitura do retorno
  return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

// 3. Chamamos a função uma vez direto para a tela não começar em branco
atualizaCronometro();

// 4. O SEGREDO: Executa a função de atualizar a cada 1000 milissegundos (1 segundo)
setInterval(atualizaCronometro, 1000);