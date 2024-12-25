// Date: 26/08/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Coding Challenge #1 Dom and Events

document.querySelector('button.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';   
    document.querySelector('.number').style.height = '15rem'; 
});
document.querySelector('button.doan').addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.number').textContent = secretNumber;
  if(secretNumber == Number(document.querySelector('.guess').value)){
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent) + 1;
    //textContent : gán giá trị cho thẻ, lấy giá trị của thẻ
    //.value : dùng để lấy giá trị của thẻ input
  }else{
    document.querySelector('.message').textContent = 'Wrong Number!';
  }
});
