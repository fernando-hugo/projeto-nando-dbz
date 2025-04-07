// Seleciona todos os botões e personagens do DOM
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

// Associa um evento de clique a cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        // Remove a seleção do botão atualmente ativo
        removerSelecao('.botao.selecionado');

        // Adiciona a classe 'selecionado' ao botão clicado
        botao.classList.add("selecionado");
        
        // Remove a seleção do personagem atualmente exibido
        removerSelecao('.personagem.selecionado');

        // Exibe o personagem correspondente ao botão clicado
        personagens[indice].classList.add("selecionado");
    });
});

/**
 * Função utilitária para remover a classe 'selecionado'
 * de um elemento atualmente selecionado.
 * @param {string} seletor - seletor CSS do item selecionado
 */
function removerSelecao(seletor) {
    const itemSelecionado = document.querySelector(seletor);
    if (itemSelecionado) {
        itemSelecionado.classList.remove("selecionado");
    }
}
