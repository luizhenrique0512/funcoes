const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você decide explorar um Castelo Abandonado, antes de partir você deve:",
        alternativas: [
            {
                texto: "Reunir equipamentos para exploração",
                afirmacao: "Você é organizado e preparado."
            },
            {
                texto: "Falar com Historiador local",
                afirmacao: "Você é curioso"
            }
        ]
    },
    {
        enunciado: "Ao chegar no castelo, você vê duas entradas principais",
        alternativas: [
            {
                texto: "Entrar pela porta principal.",
                afirmacao: "Você gosta do basico."
            },
            {
                texto: "Entrar por uma Janela Quebrada",
                afirmacao: "Você tenta coisas diferentes"
            }
        ]
    },
    {
        enunciado: "Você encontra dois caminhos para o tesouro",
        alternativas: [
            {
                texto: "Curto mas cheio de armadilhas",
                afirmacao: "Você é apressado e gosta de disafios."
            },
            {
                texto: "Longo mas seguro",
                afirmacao: "Você coloca sua segurança em primeiro lugar"
            }
        ]
    },
    {
        enunciado: "Ao chegar na sala do tesouro você ve um baú trancado",
        alternativas: [
            {
                texto: "Você tenta desvendar o misterio para abrir",
                afirmacao: "Você gosta de resolver as coisas logicamente."
            },
            {
                texto: "Você procura alguma coisa pra quebrar o baú",
                afirmacao: "Você Você gosta de resolver as coisas na força bruta."
            }
        ]
    },
    {
        enunciado: "Depois da sua experiencia no castelo você:",
        alternativas: [
            {
                texto: "Compartilho para seus amigos",
                afirmacao: "Você confia nos seus amigos."
            },
            {
                texto: "guarda o segredo para você.",
                afirmacao: "Vocẽ guarda as coisas para si mesmo."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre Você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
