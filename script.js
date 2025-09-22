const menuPrincipal = document.getElementById('menu-principal');
const comoJogar = document.getElementById('como-jogar');
const telaHino = document.getElementById('tela-hino');
const telaQuiz = document.getElementById('tela-quiz');
const telaFinal = document.getElementById('tela-final');
const telaErro = document.getElementById('tela-erro');
const telaVitoria = document.getElementById('tela-vitoria');
const btnComecar = document.getElementById('btn-comecar');
const btnComoJogar = document.getElementById('btn-como-jogar');
const btnHino = document.getElementById('btn-hino');
const btnVoltarInstrucoes = document.getElementById('btn-voltar-instrucoes');
const btnVoltarHino = document.getElementById('btn-voltar-hino');
const btnRecomecar = document.getElementById('btn-recomecar');
const btnReiniciar = document.getElementById('btn-reiniciar');
const btnReiniciarVitoria = document.getElementById('btn-reiniciar-vitoria');
const perguntaDiv = document.getElementById('pergunta');
const opcoesDiv = document.getElementById('opcoes');
const hinoAudio = document.getElementById('hino-audio');
const perguntas = [
    {
        pergunta: "1. Qual o nome oficial do estádio do São Paulo?",
        opcoes: ["Estádio Governador Adhemar de Barros", "Estádio Cícero Pompeu de Toledo", "Estádio do Morumbi", "Estádio Paulo Machado de Carvalho"],
        respostaCorreta: "Estádio Cícero Pompeu de Toledo"
    },
    {
        pergunta: "2. O São Paulo é o único clube brasileiro que foi tricampeão mundial de clubes reconhecido pela FIFA. Em quais anos o clube conquistou estes títulos?",
        opcoes: ["1992, 1993 e 2005", "1993, 2005 e 2006", "1992, 2005 e 2006", "1992, 1993 e 1994"],
        respostaCorreta: "1992, 1993 e 2005"
    },
    {
        pergunta: "3. Quem é o maior artilheiro da história do São Paulo FC?",
        opcoes: ["Gino Orlando", "Serginho Chulapa", "Careca", "Luis Fabiano"],
        respostaCorreta: "Serginho Chulapa"
    },
    {
        pergunta: "4. Qual dos seguintes jogadores é conhecido como “o Mito” e detém o recorde de partidas disputadas pelo São Paulo FC?",
        opcoes: ["Zetti", "Raí", "Rogério Ceni", "Kaká"],
        respostaCorreta: "Rogério Ceni"
    },
    {
        pergunta: "5. Qual time inglês o São Paulo venceu na final do Mundial de Clubes de 2005, com um placar de 1 a 0?",
        opcoes: ["Manchester United", "Barcelona", "Milan", "Liverpool"],
        respostaCorreta: "Liverpool"
    },
    {
        pergunta: "6. Quem foi o técnico do “Esquadrão Tricolor” nas conquistas da Libertadores de 1992 e 1993?",
        opcoes: ["Telê Santana", "Muricy Ramalho", "Paulo Autuori", "Dorival Júnior"],
        respostaCorreta: "Telê Santana"
    },
    {
        pergunta: "7. O São Paulo conquistou um inédito tricampeonato brasileiro consecutivo. Em quais anos isso aconteceu?",
        opcoes: ["2005, 2006 e 2007", "2006, 2007 e 2008", "2007, 2008 e 2009", "2004, 2005 e 2006"],
        respostaCorreta: "2006, 2007 e 2008"
    },
    {
        pergunta: "8. Em que ano o São Paulo conquistou a Copa Sul-Americana?",
        opcoes: ["2011", "2013", "2014", "2012"],
        respostaCorreta: "2012"
    },
    {
        pergunta: "9. Em que ano o São Paulo conquistou a sua primeira Copa do Brasil?",
        opcoes: ["2023", "2021", "2005", "2012"],
        respostaCorreta: "2023"
    },
    {
        pergunta: "10. Qual é a mascote oficial do São Paulo FC?",
        opcoes: ["O Tigre", "O Leão", "O Tricolor", "O Santo Paulo"],
        respostaCorreta: "O Santo Paulo"
    }
];

let perguntaAtual = 0;

function mostrarTela(tela) {
    menuPrincipal.style.display = 'none';
    comoJogar.style.display = 'none';
    telaHino.style.display = 'none';
    telaQuiz.style.display = 'none';
    telaFinal.style.display = 'none';
    telaErro.style.display = 'none';
    telaVitoria.style.display = 'none';
    hinoAudio.pause();
    hinoAudio.currentTime = 0;
    tela.style.display = 'flex';
}

function carregarPergunta() {
    const perguntaAtualObj = perguntas[perguntaAtual];
    perguntaDiv.innerText = perguntaAtualObj.pergunta;
    opcoesDiv.innerHTML = "";

    perguntaAtualObj.opcoes.forEach(opcao => {
        const botao = document.createElement("div");
        botao.classList.add("botao-opcao");
        botao.innerText = opcao;
        botao.onclick = () => verificarResposta(opcao);
        opcoesDiv.appendChild(botao);
    });
}

function verificarResposta(opcaoSelecionada) {
    const respostaCorreta = perguntas[perguntaAtual].respostaCorreta;
    if (opcaoSelecionada === respostaCorreta) {
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            carregarPergunta();
        } else {
            mostrarTela(telaVitoria);
        }
    } else {
        mostrarTela(telaErro);
    }
}

btnComecar.onclick = () => {
    perguntaAtual = 0;
    carregarPergunta();
    mostrarTela(telaQuiz);
};

btnComoJogar.onclick = () => mostrarTela(comoJogar);

btnHino.onclick = () => {
    mostrarTela(telaHino);
    hinoAudio.play();
};

btnVoltarInstrucoes.onclick = () => mostrarTela(menuPrincipal);
btnVoltarHino.onclick = () => mostrarTela(menuPrincipal);
btnRecomecar.onclick = () => mostrarTela(menuPrincipal);
btnReiniciar.onclick = () => mostrarTela(menuPrincipal);
btnReiniciarVitoria.onclick = () => mostrarTela(menuPrincipal);