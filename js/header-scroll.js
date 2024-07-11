window.addEventListener('scroll', function(){
  let headernav = document.querySelector('#header')
  headernav.classList.toggle('scrolled', window.scrollY > 0)
})