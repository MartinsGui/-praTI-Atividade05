Projeto: Lista de Metas para 2025

Uma aplicação simples de lista de metas utilizando HTML, TailwindCSS e JavaScript, com armazenamento de dados no localStorage. O objetivo da aplicação é permitir a criação, leitura, edição e exclusão de metas para o ano de 2025. Todas as metas são persistidas no navegador, garantindo que não sejam perdidas ao recarregar a página.

🎯 Funcionalidades Principais

Adicionar Metas: O usuário pode adicionar metas através de um campo de texto e um botão de registro.

Visualizar Metas: As metas adicionadas são exibidas em uma lista na página.

Editar Metas: O usuário pode alterar o texto de uma meta já registrada.

Excluir Metas: O usuário pode remover metas específicas da lista.

Persistência de Dados: As metas são armazenadas no localStorage, permitindo que persistam mesmo após o fechamento ou recarregamento da página.

Quebra Automática de Texto: Metas muito longas são automaticamente quebradas em várias linhas para evitar sobreposição dos botões de ação.

🖼️ Interface do Usuário

A aplicação foi estilizada utilizando TailwindCSS para garantir:

Aparência moderna e responsiva.

Botões de ação destacados e organizados.

Lista de metas limpa e de fácil leitura.

🚀 Tecnologias Utilizadas

HTML: Estrutura básica da aplicação.

TailwindCSS: Estilização responsiva e moderna.

JavaScript: Lógica para manipulação do DOM e localStorage.

📂 Estrutura de Arquivos

├── index.html         # Página principal
├── style.css          # Estilizações personalizadas (caso necessário)
├── app.js             # Lógica da aplicação em JavaScript
└── README.md          # Documentação do projeto

📋 Como Executar o Projeto

Clone o repositório ou faça o download dos arquivos:

git clone https://github.com/seu-usuario/todo-app-2025.git

Abra o arquivo index.html no navegador.

Comece a adicionar suas metas para 2025!

🛠️ Funcionalidades Implementadas

1. Adicionar Metas

Insira o texto no campo de entrada e clique em "Adicionar".

A meta será exibida imediatamente na lista e salva no localStorage.

2. Exibir Metas

Todas as metas salvas no localStorage são carregadas automaticamente ao abrir a página.

3. Editar Metas

Clique no botão "Editar" para modificar uma meta existente.

Após a edição, pressione "Enter" ou clique fora do campo para salvar a alteração.

4. Excluir Metas

Clique no botão "Excluir" para remover a meta da lista e do localStorage.

✨ Funcionalidade Extra

Quebra de Texto Automática: Metas muito extensas são automaticamente quebradas em várias linhas, garantindo que os botões "Editar" e "Excluir" permaneçam alinhados e visíveis.

📚 Aprendizados e Melhorias

Manipulação do DOM: Utilizamos métodos do DOM para criar e gerenciar elementos HTML de forma dinâmica.

Persistência de Dados: Aprendemos a trabalhar com o localStorage para salvar e carregar dados.

Estilização Responsiva: TailwindCSS foi usado para criar uma interface elegante e adaptável a diferentes dispositivos.

🔧 Melhorias Futuras

Adicionar a opção de marcar metas como concluídas, com estilização diferenciada.

Implementar uma animação suave ao adicionar ou remover metas.

Permitir a ordenação de metas por prioridade ou data de criação.

👨‍💻 Autor

Guilherme Martins

Contribuições, sugestões e feedbacks são bem-vindos!
