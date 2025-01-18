let questionIndex = 0;
let selectedIds = [];

// Definindo as perguntas e suas respostas com múltiplos IDs
const questions = [
    {
        question: "Qual é a sua matéria acadêmica favorita?",
        answers: [
            { text: "Artes", ids: [1, 3] },  
            { text: "Educação física", ids: [2] }, 
            { text: "Engenharia", ids: [3, 4] },
            { text: "Ciências exatas", ids: [4, 6] },       
            { text: "Ciência política", ids: [5] } 
        ]
    },
    {
        question: "Qual adjetivo melhor descreve você?",
        answers: [
            { text: "Criativo", ids: [1, 3] }, 
            { text: "Impaciente", ids: [2] }, 
            { text: "Engenhoso", ids: [1, 3,] }, 
            { text: "Calmo", ids: [4, 5, 6] }, 
            { text: "Descontraído", ids: [1] }
        ]
    },
    {
        question: "Como você prefere passar o seu fim de semana?",
        answers: [
            { text: "Sozinho, em casa", ids: [5] }, 
            { text: "Focando em projetos pessoais", ids: [1, 6] }, 
            { text: "Rodeado de amigos", ids: [4] }, 
            { text: "Com a família", ids: [3, 2] }, 
            { text: "Bebendo", ids: [2] }
        ]
    },
    {
        question: "Com qual teoria política você mais se identifica?",
        answers: [
            { text: "Liberalismo", ids: [4, 5] }, 
            { text: "Democracia", ids: [2, 4] }, 
            { text: "Socialismo", ids: [3, 6] }, 
            { text: "Anarquismo", ids: [1] }, 
            { text: "neo-liberalismo", ids: [5] }
        ]
    },
    {
        question: "Qual é o seu personagem favorito da lista abaixo?",
        answers: [
            { text: "Vi", ids: [1, 5] }, 
            { text: "Ekko", ids: [1] }, 
            { text: "Viktor", ids: [4] }, 
            { text: "Jinx", ids: [2, 3] }, 
            { text: "Jayce", ids: [6] }
        ]
    },
    {
        question: "Um trem avança sem freios e está prestes a atropelar cinco pessoas desconhecidas que estão sobre a linha férrea. Você está ao lado da estrada, em frente a uma alavanca que,caso seja puxada, consegue desviar o trajeto da composição. No entanto, se você acionar o equipamento, o trem vai atropelar outra pessoa na linha ao lado muito querida para você. Qual você escolhe?",
        answers: [
            { text: "Puxar a alavanca", ids: [3, 4, 5, 6] }, 
            { text: "Não puxar a alavanca", ids: [1, 2] }, 
            { text: "Impedir o percurso do trem com a sua própria morte", ids: [1, 6] }, 
            { text: "Interceptar o trem com um inocente que passava pela área que não tinha nada a ver com o problema", ids: [2] }, 
            { text: "Fazer o trem descarrilhar para um precipício, matando assim o motorista", ids: [4, 5] }
        ]
    },
    {
        question: "Você é de repente um cantor à procura de um rumo na vida após uma carreira repleta de fracassos, e por um acaso do destino, você se encontra com a oportunidade de formar um grupo musical. Qual seria o gênero musical do seu grupo?",
        answers: [
            { text: "Pop", ids: [1] }, 
            { text: "Hip-hop", ids: [3] }, 
            { text: "Música clássica", ids: [5, 6] }, 
            { text: "Blues", ids: [4] }, 
            { text: "Rock", ids: [2] }
        ]
    },
    {
        question: "Você é mais introvertido ou extrovertido?",
        answers: [
            { text: "Extrovertido", ids: [2, 3, 4] }, 
            { text: "Introvertido", ids: [1, 5, 6] }, 
            { text: "Tenho um círculo social gigante", ids: [4] }, 
            { text: "Depende do momento", ids: [1, 3, 5] }, 
            { text: "Completamente anti-social", ids: [6] }
        ]
    },
    {
        question: "No trabalho, você deixa a sua marmita na geladeira para comer depois, mas quando você abre a geladeira no horário de almoço, percebe que a mesma não está mais lá pois alguém do seu ambiente de trabalho já a comeu. Qual seria sua reação?",
        answers: [
            { text: "Tento deduzir o culpado e começo a sabotá-lo no ambiente de trabalho como vingança", ids: [1, 2] }, 
            { text: "Comunico o problema para os meus colegas e tento o resolver de uma forma pacífica", ids: [3, 4, 5] }, 
            { text: "Declaro o sumiço da minha marmita com um grito repleto de palavrões para pesar o ambiente de trabalho e a consciência do culpado", ids: [2] }, 
            { text: "Acuso a primeira pessoa que vejo pela frente e assim por diante, procurando pelo culpado", ids: [2] }, 
            { text: "Rezo para que não façam de novo", ids: [6] }
        ]
    },
    {
        question: "Você acredita na meritocracia?",
        answers: [
            { text: "Sim", ids: [4, 5] }, 
            { text: "Não", ids: [1, 2, 3] }, 
            { text: "Somente na presença da equidade", ids: [6] }, 
            { text: " ", ids: [0] }, 
            { text: " ", ids: [0] }
        ]
    }

];

// Definindo os personagens com base nos IDs
const characters = [
    { id: 1, name: "Jinx", type: "Explosivo", brief: "Destruir coisas", description: "Assim como Jinx, você é uma pessoa intensa e cheia de energia, um pouco caótica também. Com um senso de humor excêntrico e uma paixão por destruição, ela luta contra seus próprios demônios. Apesar de sua natureza explosiva, Jinx tem um lado sensível e vulnerável, escondido sob sua fachada rebelde.", image: "imgs/Jinx.jpg" },
    { id: 2, name: "Vi", type: "Ousado", brief: "Socar tudo no seu caminho", description: "Assim como Vi, você é uma pessoa cheia de determinação e coragem, sempre pronta para enfrentar desafios. Com um espírito forte e uma vontade inabalável, você luta pela justiça, mesmo quando as circunstâncias parecem impossíveis. Apesar de sua fachada implacável, há um lado protetor e apaixonado que você esconde, especialmente quando se trata das pessoas que você ama.", image: "imgs/Vi.jpg" },
    { id: 3, name: "Ekko", type: "Prodígio", brief: "Desafiar o tempo", description: "Ekko é a personificação da mente brilhante e criativa. Sempre em busca de soluções inovadoras para problemas complexos, você tem uma capacidade única de ver o mundo de maneira diferente. Sua curiosidade insaciável e sua habilidade em manipular o tempo refletem uma mente inquieta, constantemente buscando novas formas de transformar a realidade e alcançar seus objetivos.", image: "imgs/Ekko.jpg" },
    { id: 4, name: "Jayce", type: "Ambicioso", brief: "Lutar pelo amanhã", description: "Jayce é um visionário com um desejo incansável de mudar o mundo. Sua busca por conhecimento e progresso o coloca em uma jornada de descobertas, onde a ciência e a ambição andam lado a lado. Embora sua fé em suas próprias invenções seja inabalável, você também lida com os dilemas éticos e as consequências de suas ações, muitas vezes enfrentando um conflito dentro de si.", image: "imgs/Jayce.jpg" },
    { id: 5, name: "Caitlyn", type: "Certeiro", brief: "Viciada em cumprir com a justiça", description: "Caitlyn é uma mente lógica e meticulosa, sempre focada em resolver mistérios e trazer justiça a quem precisa. Sua postura estratégica e seu foco no trabalho em equipe refletem sua habilidade em analisar cada situação com precisão, sempre em busca da verdade. Embora sua natureza racional a faça parecer fria, ela possui uma forte moral e um senso de dever que a impulsionam a proteger aqueles ao seu redor.", image: "imgs/Caitlyn.jpg" },
    { id: 6, name: "Viktor", type: "Visionário", brief: "Gloriosa evolução", description: "Viktor é um homem de ambição imensa, movido pela ideia de mudar o curso da história por meio da ciência e da tecnologia. Sua visão de um futuro melhor é o que o impulsiona a buscar a perfeição, mesmo que isso envolva sacrifícios, muitos deles. Sua jornada é marcada por uma busca incessante por evolução, mas ao mesmo tempo, uma luta interna sobre até onde ele está disposto a ir para alcançar seus objetivos.", image: "imgs/Viktor.jpg" }
];

function nextQuestion(answerIds) {
    // Adicionando os IDs das respostas selecionadas
    selectedIds = [...selectedIds, ...answerIds];
    
    // Avançar para a próxima pergunta ou mostrar o resultado
    questionIndex++;

    if (questionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}




function loadQuestion() {
    const question = questions[questionIndex];
    document.getElementById("question-text").textContent = question.question;

    // Adicionando as respostas aos botões
    const buttons = document.querySelectorAll('.answer');
    buttons.forEach((button, index) => {
        button.textContent = question.answers[index].text;
        button.setAttribute('onclick', `nextQuestion(${JSON.stringify(question.answers[index].ids)})`);
    });
}

function showResult() {
    // Encontrando o personagem baseado nos IDs mais comuns
    let selectedCharacter = null;
    
    // Contabilizando a frequência de cada ID
    const frequency = {};
    selectedIds.forEach(id => {
        frequency[id] = (frequency[id] || 0) + 1;
    });

    // Identificando o ID mais comum (o mais frequente)
    let maxFrequency = 0;
    let resultId = null;
    for (const [id, count] of Object.entries(frequency)) {
        if (count > maxFrequency) {
            maxFrequency = count;
            resultId = id;
        }
    }

    // Encontrando o personagem com o ID mais comum
    selectedCharacter = characters.find(character => character.id == resultId);

    console.log("Personagem selecionado: ", selectedCharacter);

    // Exibindo o resultado
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('personality-type').textContent = selectedCharacter.name;
    document.getElementById('brief-text').textContent = selectedCharacter.brief;
    document.getElementById('type-text').textContent = selectedCharacter.type;
    document.getElementById('result').innerHTML += `<p>${selectedCharacter.description}</p>`;


    const imgElement = document.createElement('img');
    imgElement.src = selectedCharacter.image;
    imgElement.alt = selectedCharacter.name;
    imgElement.classList.add('character-image');
    console.log("Imagem criada:", imgElement);
    document.getElementById('result').appendChild(imgElement);

    
    document.querySelectorAll('.biolegenda').forEach(element => {
        element.classList.remove(
            'jinx-biolegenda', 'vi-biolegenda', 'ekko-biolegenda', 
            'jayce-biolegenda', 'caitlyn-biolegenda', 'viktor-biolegenda'
        );
    });


    document.querySelectorAll('.biotitulo').forEach(element => {
        element.classList.remove(
            'jinx-biotitulo', 'vi-biotitulo', 'ekko-biotitulo', 
            'jayce-biotitulo', 'caitlyn-biotitulo', 'viktor-biotitulo'
        );
    });



    document.body.classList.remove('jinx-style', 'vi-style', 'ekko-style', 'jayce-style', 'caitlyn-style', 'viktor-style');

    switch (resultId) {
        case '1':  
            document.body.classList.add('jinx-style');
            document.querySelectorAll('.biolegenda').forEach(element => {
                element.classList.add('jinx-biolegenda');
            });
            document.querySelectorAll('.biotitulo').forEach(element => {
                element.classList.add('jinx-biotitulo');
            });
            break;
        case '2':  
            document.body.classList.add('vi-style');
            document.querySelectorAll('.biolegenda').forEach(element => {
                element.classList.add('vi-biolegenda');
            });
            document.querySelectorAll('.biotitulo').forEach(element => {
                element.classList.add('vi-biotitulo');
            });
            break;
        case '3':  
            document.body.classList.add('ekko-style');
            document.querySelectorAll('.biolegenda').forEach(element => {
                element.classList.add('ekko-biolegenda');
            });
            document.querySelectorAll('.biotitulo').forEach(element => {
                element.classList.add('ekko-biotitulo');
            });
            break;
        case '4':
            document.querySelectorAll('.biolegenda').forEach(element => {
                element.classList.add('jayce-biolegenda');
            });
            document.querySelectorAll('.biotitulo').forEach(element => {
                element.classList.add('jayce-biotitulo');
            });
            document.body.classList.add('jayce-style');
            break;
        case '5':  
            document.body.classList.add('caitlyn-style');
            document.querySelectorAll('.biolegenda').forEach(element => {
                element.classList.add('caitlyn-biolegenda');
            });
            document.querySelectorAll('.biotitulo').forEach(element => {
                element.classList.add('caitlyn-biotitulo');
            });
            break;
            case '6':
                document.querySelectorAll('.biolegenda').forEach(element => {
                    element.classList.add('viktor-biolegenda');
                });
                document.querySelectorAll('.biotitulo').forEach(element => {
                    element.classList.add('viktor-biotitulo');
                });
            document.body.classList.add('viktor-style');
            
            break;
        default:
            break;
    }

}

// Inicia o quiz
loadQuestion();