const botao = document.querySelector('.botao-menu')
const menulateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const background = document.querySelector('.backgound')

botao.addEventListener('click', () => {
   botao.classList.toggle('ativo')
   menulateral.classList.toggle('ativo')
   conteudo.classList.toggle('ativo')
   background.classList.toggle('ativo')


})

background.addEventListener('click', () => {
   botao.classList.remove('ativo')
   menulateral.classList.remove('ativo')
   conteudo.classList.remove('ativo')
   background.classList.remove('ativo')

})