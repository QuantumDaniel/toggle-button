

document.querySelector('.js-button2').addEventListener('click',()=>{
document.querySelector('.js-button3').classList.add('button3');
document.querySelector('.js-button4').classList.add('button4Change');
document.querySelector('.js-button1').classList.add('button1Change');
document.querySelector('.js-button2').classList.remove('button2');
document.querySelector('.js-on-off').innerHTML='ON';
document.querySelector('.js-name').classList.add('name');
document.querySelector('.js-name').innerHTML ='my name is Titus';
});

document.querySelector('.js-button3').addEventListener('click',()=>{
  document.querySelector('.js-button3').classList.remove('button3');
  document.querySelector('.js-button4').classList.remove('button4Change');
  document.querySelector('.js-button1').classList.remove('button1Change');
  document.querySelector('.js-button2').classList.add('button2');
  document.querySelector('.js-on-off').innerHTML='OFF';
  document.querySelector('.js-name').classList.remove('name');
document.querySelector('.js-name').innerHTML ='';

  
  });



