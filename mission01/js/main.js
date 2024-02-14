// 유저 정보
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

/**
 * $idInput >> $ html에서 가져온 암묵적인 명시(제이쿼리에서 익숙하신분들이 쓴다.)
 */

const idField = document.querySelector('#userEmail');
const pwField = document.querySelector('#userPassword');
const submit = document.querySelector('.btn-login');

let id_valid = false;
let pw_valid = false;

/**
 * 정규식을 통해 이메일과 패스워드 형식 체크
 * @param {string} text 
 * @returns {boolean} 
 */

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}
function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

/**
 * 정규식과 user의 정보를 통해 다음 화면으로 넘어갈수있는지 체크
 */

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

/**
 * 아이디와 패스워드가 invalid하면 아이디와 비밀번호를 다시 확인해달라는 알림
 * 올바르면 welcome.html로 화면 전환
 */

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





// 강사님 코드


// const user = {
//   id:'asd@naver.com',
//   pw:'spdlqj123!@'
// }



// /*

// 1. email 정규표현식을 사용한 validation
//   - false면 해당 input에 is--invalid 클래스 추가 (add)
//   - true면 해당 input에 is--invalid 클래스 제거 (remove)

// 2. pw 정규표현식을 사용한 validation
//   - false면 해당 input에 is--invalid 클래스 추가 (add)
//   - true면 해당 input에 is--invalid 클래스 제거 (remove)

// 3. 상태 변수 관리
//   - 사용자가 이메일을 제대로 입력했다면 -> true | false
//   - 사용자가 비밀번호 제대로 입력했다면 -> true | false

// 4. 로그인 버튼을 클릭시 조건처리
// user.id === value 
// user.pw === value 

// welcome.html로 이동~!

// */

// // @ 기호 포함, .이후 2글자 이상
// function emailReg(text){
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   return re.test(String(text).toLowerCase())
// }


// // 최소 6글자 이상, 0~9숫자 1개이상 포함, 특수기호 1개 이상 포함
// function pwReg(text){
//   const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
//   return re.test(String(text).toLowerCase());
// }




// const emailInput = document.querySelector('#userEmail');
// const pwInput = document.querySelector('#userPassword');
// const loginButton = document.querySelector('.btn-login');

// let emailPass = false;
// let pwPass = false;


// function handleEmailCheck () {
  
//   const value = this.value;

//   if(emailReg(value)){
//     // 이메일 인풋에게 is--invalid 클래스를 제거
//     this.classList.remove('is--invalid');
//     emailPass = true;
//   }else{
//     // 이메일 인풋에게 is--invalid 클래스를 추가
//     this.classList.add('is--invalid');
//     emailPass = false;
//   }
// }

// function handlePwCheck(){
  
//   const value = this.value;

//   if(pwReg(value)){
//     this.classList.remove('is--invalid');
//     pwPass = true;
//   }else{
//     this.classList.add('is--invalid');
//     pwPass = false;
//   }
// }

// function handleLogin(e){
//   e.preventDefault();

//   if(emailPass && pwPass){
//     try{
//       const id = emailInput.value;
//       const pw = pwInput.value;
//       const getUserId = user.id; // 비동기 통신 1s
//       const getUserPw = user.pw; // 비동기 통신 1s

//       if(id === getUserId && pw === getUserPw){
//         console.log('로그인 성공!');
//         location.href = 'welcome.html'
//       }
//     }catch{

//     }
//   }
// }



// emailInput.addEventListener('input',handleEmailCheck)
// pwInput.addEventListener('input',handlePwCheck)
// loginButton.addEventListener('click',handleLogin)
