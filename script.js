const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultados = document.querySelector(".texto-resultado");
const imagemPergunta = document.querySelector(".imagem-pergunta");

const perguntas = [
    {
        enunciado: "O Paraná se destaca na produção de grãos, sendo um dos maiores produtores de milho do Brasil?",
        imagem: "img/img1.jpeg",
        alternativas: [
            {
                texto: "sim.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "A cana-de-açúcar é a cultura agrícola com a maior área plantada no Paraná?",
        imagem: "img/2.jpeg",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "afirmacao"
            },
            {
                texto: "Sim",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "A pecuária de corte extensiva é a forma predominante de criação de bovinos no Paraná ",
        imagem: "img/3.jpeg",
        alternativas: [
            {
                texto: "Não.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Sim",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "O estado do Paraná investe em pesquisa e tecnologia para o desenvolvimento de práticas agrícolas sustentáveis?",
        imagem: "img/4.jpeg",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "A fruticultura, especialmente a produção de uva e morango, possui importância econômica em algumas regiões do estado?",
        imagem: "img/5.jpeg",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não",
                afirmacao: "negacao"
            }
        ]
    }
];