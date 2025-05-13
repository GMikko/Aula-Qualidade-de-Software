const botao = document.getElementById("botaoFujao");

botao.addEventListener("mouseover", () => {
  const larguraJanela = window.innerWidth - botao.offsetWidth;
  const alturaJanela = window.innerHeight - botao.offsetHeight;

  const novaPosX = Math.floor(Math.random() * larguraJanela);
  const novaPosY = Math.floor(Math.random() * alturaJanela);

  botao.style.position = "absolute";
  botao.style.left = novaPosX + "px";
  botao.style.top = novaPosY + "px";
});
