# ⭐ GitFav - Seus Devs Favoritos

Uma aplicação web interativa que permite buscar usuários do GitHub através da API oficial e salvá-los em uma lista de favoritos. O projeto apresenta uma interface moderna com efeito "Glassmorphism" (vidro fosco) e design responsivo.

## 🚀 Demonstração
Acesse o projeto online aqui: **[GitFav - API-GIT](https://lucasriandev.github.io/API-GIT/)**

![Preview do Projeto](https://github.com/user-attachments/assets/fda3aee9-7761-46d8-874b-6b0d907cd7cf)

## 📋 Sobre o Projeto
O GitFav foi desenvolvido para praticar o consumo de APIs RESTful, manipulação do DOM e armazenamento de dados no navegador. O usuário pode buscar qualquer desenvolvedor pelo "login" do GitHub, visualizar suas informações (avatar, nome, bio, seguidores e repositórios) e adicioná-lo a uma lista de favoritos persistente.

### 🛠️ Tecnologias Utilizadas
* **HTML5**: Estruturação da aplicação, dividida entre barra lateral de favoritos e área principal de busca.
* **CSS3**: 
  * Efeito avançado de *Glassmorphism* usando `backdrop-filter: blur(20px)` e fundos semitransparentes.
  * Uso de animações fluidas (`@keyframes floatUp`) para o carregamento do perfil.
  * Integração com a fonte *Poppins* e *Material Icons* do Google Fonts.
* **JavaScript (ES6+)**: 
  * Consumo assíncrono (`async/await` e `fetch`) da API pública do GitHub (`https://api.github.com/users/`).
  * Persistência de dados utilizando o `localStorage` para manter os favoritos salvos mesmo após atualizar a página.

## ✨ Funcionalidades
* **Busca em Tempo Real**: Digite o nome de usuário (login) do GitHub e veja os dados aparecerem instantaneamente.
* **Gerenciamento de Favoritos**: Adicione usuários à sua lista com verificação de duplicidade (não permite adicionar o mesmo usuário duas vezes).
* **Persistência de Dados**: Feche o navegador e volte depois; seus favoritos estarão lá graças ao `localStorage`.
* **Navegação Dinâmica**: Clique em um usuário salvo na lista de favoritos para recarregar seus dados principais na tela.
* **Atalhos Práticos**: Suporte à tecla `Enter` para facilitar a busca sem precisar clicar no botão.

## 📂 Estrutura de Arquivos
```text
├── index.html   # Estrutura visual da aplicação
├── styles.css   # Estilos, temas gradient e efeitos glassmorphism
├── script.js    # Lógica de integração com a API e LocalStorage
└── README.md    # Documentação do projeto
