const inputBusca = document.querySelector("#input-search");
const btnBusca = document.querySelector("#btn-search");

const imgAvatar = document.querySelector("#img-avatar");
const txtNome = document.querySelector("#txt-name");
const txtLogin = document.querySelector("#txt-login");
const txtBio = document.querySelector("#txt-bio");
const txtSeguidores = document.querySelector("#txt-followers");
const txtRepo = document.querySelector("#txt-repos");
const listaUl = document.querySelector("#lista-favoritos");
const areaPerfil = document.querySelector(".profile-area");

const btnFavoritar = document.querySelector("#btn-fav");

let usuarioAtual = null;
let listaFavoritos = JSON.parse(localStorage.getItem("Favoritos")) || [];

async function buscarApi() {
  const usuario = inputBusca.value;
  if (usuario === "") return;

  const url = `https://api.github.com/users/${usuario}`;

  try {
    const resposta = await fetch(url);
    if (!resposta.ok) {
      throw new Error("Erro na primeira fase!");
    }

    const dados = await resposta.json();
    console.log(dados);

    imgAvatar.src = dados.avatar_url;
    txtNome.innerText = dados.name;
    txtLogin.href = dados.html_url;
    txtBio.innerText = dados.bio;
    txtSeguidores.innerText = dados.followers;
    txtRepo.innerText = dados.public_repos;

    areaPerfil.style.display = "block";

    usuarioAtual = dados;

    inputBusca.value = "";
  } catch (error) {
    console.log(error);
    alert("Erro");
  }
}

btnBusca.addEventListener("click", buscarApi);

btnFavoritar.addEventListener("click", () => {
  if (usuarioAtual === null) return;

  const jaExiste = listaFavoritos.some((item) => item.id === usuarioAtual.id);
  if (jaExiste) {
    alert("Esse usuario já está nos favoritos!");
    return;
  }

  listaFavoritos.push(usuarioAtual);
  localStorage.setItem("Favoritos", JSON.stringify(listaFavoritos));

  renderizar();

  alert("Usuario salvo com sucesso!");
  console.log(listaFavoritos);
});

function renderizar() {
  listaUl.innerHTML = "";

  listaFavoritos.forEach((item) => {
    const novoLi = document.createElement("li");

    novoLi.innerHTML = `
            <img src="${item.avatar_url}" alt="Avatar">
            <span>${item.login}</span>
            <button class="btn-remove">&times;</button>
        `;
    const btnRemove = novoLi.querySelector(".btn-remove");
    btnRemove.addEventListener("click", () => {
      listaFavoritos = listaFavoritos.filter((fav) => fav.id !== item.id);
      localStorage.setItem("Favoritos", JSON.stringify(listaFavoritos));
      renderizar();
    });

    novoLi.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-remove")) return;

      imgAvatar.src = item.avatar_url;
      txtNome.innerText = item.name;
      txtLogin.innerText = item.login;
      txtLogin.href = item.html_url;
      txtSeguidores.innerText = item.followers;
      txtRepo.innerText = item.public_repos;
      document.querySelector(".profile-area").style.display = "block";
    });

    listaUl.appendChild(novoLi);
  });
}

inputBusca.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btnBusca.click();
  }
});

renderizar();
