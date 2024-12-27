// Seleção de elementos do DOM
const produto1 = document.getElementById('produto1');
const produto2 = document.getElementById('produto2');
const resultado = document.getElementById('resultado');
const liquid = document.getElementById('liquid');
const bubbles = document.getElementById('bubbles'); // Certifique-se de que o elemento existe no HTML
const waterStream = document.getElementById('water-stream');

// Adiciona evento ao botão de mistura
document.getElementById('btn-misturar').addEventListener('click', function () {
    const produto1Value = produto1.value;
    const produto2Value = produto2.value;

    resultado.innerHTML = ''; // Limpa o resultado anterior

    if (produto1Value === "" || produto2Value === "") {
        resultado.innerHTML = "<p>Por favor, selecione dois produtos para misturar.</p>";
        return;
    }

    // Inicia animação do fluxo de líquido
    waterStream.style.height = '100px';

    setTimeout(() => {
        waterStream.style.height = '0';

        // Determina o resultado da mistura
        const mistura = verificarMistura(produto1Value, produto2Value);
        liquid.style.height = '75%';

        if (mistura.toxico) {
            liquid.style.backgroundColor = 'red';
        } else {
            liquid.style.backgroundColor = 'blue';
        }

        // Exibe o resultado da mistura
        resultado.innerHTML = `<p><strong>Resultado da mistura:</strong> ${mistura.descricao}</p>
                               <p><strong>Reação química:</strong> ${mistura.reacao}</p>`;

        if (mistura.gas) {
            criarBolhas(); // Chama a função para criar bolhas
        }
    }, 1000);
});

// Função que verifica a mistura e retorna o resultado
function verificarMistura(produto1, produto2) {
    // Definir as combinações com suas reações químicas
    const reacoes = {
        'agua_sanitaria+vinagre': {
            descricao: 'Mistura altamente perigosa! Libera gases tóxicos (cloro).',
            reacao: 'NaClO + CH₃COOH → Cl₂ (gás cloro) + H₂O + NaCH₃COO',
            toxico: true,
            gas: true
        },
        'alcool+vinagre': {
            descricao: 'Mistura segura, liberação de gás carbônico (CO₂) efervescente.',
            reacao: 'NaHCO₃ + CH₃COOH → CO₂ (gás) + H₂O + NaCH₃COO',
            toxico: false,
            gas: true
        },
        'agua_sanitaria+alcool': {
            descricao: 'Mistura perigosa! Libera cloroacetona, o clorofórmio e o ácido clorídrico. Podem causar irritação e queimaduras, prejudicar o sistema nervoso central e afetar os pulmões, rins, fígado, olhos e a pele. .',
            reacao: 'NaClO + C₂H₅OH → CHCl₃ (clorofórmio) + H₂O',
            toxico: true,
            
        },
        'vinagre+desinfetante': {
            descricao: 'Mistura segura, mas com leve liberação de gás CO₂.',
            reacao: 'NaHCO₃ + CH₃COOH → CO₂ (gás) + H₂O + NaCH₃COO',
            toxico: false,
            gas: true
        },
        'detergente+desengordurante': {
            descricao: 'Mistura segura, sem reações químicas significativas.',
            reacao: 'Não ocorre reação química significativa.',
            toxico: false,
        },
        'agua_sanitaria+amonia': {
            descricao: 'Mistura perigosa!Formação de gás tóxico (cloramina).',
            reacao: 'NaClO+NH₃→NH₂Cl+NaOH.',
            toxico: true,
            gas:true

        },
        'agua_oxigenada+vinagre': {
            descricao: 'Mistura Perigosa!Forma o ácido peracético, substância que pode ser tóxica para sua saúde causa danos aos olhos,á pele,ao nariz,a garganta e aos pulmões.',
            reacao: 'Não ocorre reação química ',
            toxico: true,
             



 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        }


    };

    const chave1 = `${produto1}+${produto2}`;
    const chave2 = `${produto2}+${produto1}`;

    // Verificar se a combinação existe no objeto de reações
    return reacoes[chave1] || reacoes[chave2] || {
        descricao: 'Mistura segura, sem reações significativas.',
        reacao: 'Não ocorre reação química significativa.',
        toxico: false,
        gas: false
    };
}

// Função para criar bolhas
function criarBolhas() {
    bubbles.innerHTML = ''; // Limpa bolhas anteriores
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${2 + Math.random() * 3}s`;
        bubbles.appendChild(bubble);
    }
}
