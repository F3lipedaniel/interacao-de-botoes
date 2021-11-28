function trocarImagem(filename, armaname) {
  document.querySelector('.imagem11').setAttribute('src', 'imagens/' + filename)
  document.querySelector('.imagem11').setAttribute('data-arma', armaname)
}
function nomeArma() {
  let arma = document.querySelector('.imagem11').getAttribute('data-arma')
  alert('a arma é: ' + arma)
}
