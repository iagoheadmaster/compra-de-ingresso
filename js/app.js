// Função executada ao carregar a página
window.onload = function () {
    // Limpa o campo do tipo de ingresso ao carregar a página
    document.getElementById('tipo-ingresso').value = ''; 
    // Limpa o campo de quantidade ao carregar a página
    document.getElementById('qtd').value = '';           
}

// Função principal que inicia o processo de compra
function comprar() {
    // Obtém o valor selecionado no campo "tipo-ingresso"
    let tipo = document.getElementById('tipo-ingresso').value;
    // Obtém o valor do campo "qtd" como string
    let qtd = document.getElementById('qtd').value;

    // Verifica se a quantidade é válida; caso não seja, interrompe o processo
    if (!verificarQuantidade(qtd)) {
        return; // Para a execução se a quantidade for inválida
    }

    // Converte a quantidade para um número inteiro
    qtd = parseInt(qtd); 
    // Verifica se o tipo de ingresso foi selecionado
    if (!tipo) {
        alert('Por favor, selecione um tipo de ingresso.'); // Exibe mensagem de alerta
        return; // Interrompe a execução
    }

    // Chama a função para processar a compra com o tipo e quantidade fornecidos
    comprarIngresso(tipo, qtd);
}

// Função para verificar se a quantidade informada é válida
function verificarQuantidade(qtd) {
    // Verifica se o campo "qtd" está vazio, não é um número ou é menor ou igual a zero
    if (!qtd || isNaN(qtd) || parseInt(qtd) <= 0) {
        alert('Por favor, insira uma quantidade válida (pelo menos 1).'); // Exibe mensagem de erro
        return false; // Retorna falso para indicar que a validação falhou
    }
    return true; // Retorna verdadeiro para indicar que a validação foi bem-sucedida
}

// Função para processar a compra de ingressos com base no tipo e quantidade
function comprarIngresso(tipo, qtd) {
    // Objeto que mapeia os tipos de ingresso para os IDs correspondentes no HTML
    const tipos = {
        pista: 'qtd-pista',         // Mapeia "pista" para o ID "qtd-pista"
        inferior: 'qtd-inferior',   // Mapeia "inferior" para o ID "qtd-inferior"
        superior: 'qtd-superior'    // Mapeia "superior" para o ID "qtd-superior"
    };

    // Obtém o ID do elemento correspondente ao tipo selecionado
    const idElemento = tipos[tipo];
    // Verifica se o tipo fornecido é válido
    if (!idElemento) {
        alert('Tipo de ingresso inválido.'); // Exibe mensagem de erro
        return; // Interrompe a execução
    }

    // Obtém a quantidade disponível do tipo de ingresso selecionado
    let qtdDisponivel = parseInt(document.getElementById(idElemento).textContent);

    // Verifica se a quantidade solicitada é maior que a disponível
    if (qtd > qtdDisponivel) {
        // Exibe mensagem de erro com o tipo de ingresso formatado
        alert(`Quantidade indisponível para tipo ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`);
    } else {
        // Deduz a quantidade comprada da disponível
        qtdDisponivel -= qtd;
        // Atualiza o valor no elemento HTML correspondente
        document.getElementById(idElemento).textContent = qtdDisponivel;
        // Exibe mensagem de sucesso
        alert('Compra realizada com sucesso');
        // Limpa os campos após a compra
        limparCampos();
    }
}

// Função para limpar os campos do formulário após a compra
function limparCampos() {
    // Limpa o campo do tipo de ingresso
    document.getElementById('tipo-ingresso').value = '';
    // Limpa o campo de quantidade
    document.getElementById('qtd').value = '';
}