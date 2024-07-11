window.addEventListener('scroll', function(){
  let headernav = document.querySelector('#headerHome')
  headernav.classList.toggle('scrolledHome', window.scrollY > 0)
})