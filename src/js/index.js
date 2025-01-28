const elementosduvidas = document.querySelectorAll('.duvida')

elementosduvidas.forEach(function(duvida){
    duvida.addEventListener('click',function(){
  duvida.classList.toggle('ativo')})

})