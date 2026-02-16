const inputBusca = document.querySelector("#input-search");
const btnBusca = document.querySelector("#btn-search");

const imgAvatar = document.querySelector("#img-avatar");
const txtNome = document.querySelector("#txt-name");
const txtLogin = document.querySelector("#txt-login");
const txtBio = document.querySelector("#txt-bio");
const txtSeguidores = document.querySelector("#txt-followers");
const txtRepo = document.querySelector("#txt-repos");

const btnFavoritar = document.querySelector("#btn-fav");

let usuarioAtual = [];
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

  alert("Usuario salvo com sucesso!");
  console.log(listaFavoritos);
});
