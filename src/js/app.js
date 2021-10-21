import '../style/style.scss'

document.querySelector('.burger__menu').addEventListener('click', function(){
    document.querySelector('.burger__menu span').classList.toggle('active');
  })