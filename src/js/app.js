import '../style/style.scss'

document.querySelector('.burger__menu').addEventListener('click', () =>{
    document.querySelector('.burger__menu span').classList.toggle('active')
    document.querySelector('.menu').classList.toggle('animate');
  })
