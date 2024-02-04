
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리 >> 아이디, 비밀번호를 입럭했을때 true가 떨어졌을때 
4. 로그인 버튼을 클릭시 조건처리

*/

const idField = document.querySelector('#userEmail');
const pwField = document.querySelector('#userPassword');
const submit = document.querySelector('.btn-login');

let id_valid = false;
let pw_valid = false;

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function idCheck(){
  if(emailReg(this.value)){
    console.log('success');
    idField.classList.remove('is--invalid');
  }
  else{
    idField.classList.add('is--invalid');
  }

  if(this.value === user.id) id_valid = true;
  else id_valid = false;
  
}

function pwCheck(){
  if(pwReg(this.value)){
    console.log('success');
    pwField.classList.remove('is--invalid');
  }
  else{
    pwField.classList.add('is--invalid');
  }
  if(this.value === user.pw) pw_valid = true;
  else pw_valid = false;
}

function submitCheck(e){
  
  e.preventDefault();
  
  console.log('제출!!');
  if(id_valid && pw_valid){
    location.href = 'welcome.html';
  }
  else {
    alert('아이디와 비밀번호를 다시 확인해주세요');
  }
}


idField.addEventListener('input', idCheck);
pwField.addEventListener('input', pwCheck);

submit.addEventListener('click',submitCheck);


