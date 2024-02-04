# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.


- 제출 구글 폼
https://docs.google.com/forms/d/e/1FAIpQLScpXQBd8pTPlCaiqxS_QBXRjhRqHry3pA7MDC-7DhKvAnRR6Q/viewform


### Mission01의 목표

* 이메일과 패스워드 형식에 맞는지 정규식을 통해서 체크하고 그에 맞게 조건문 처리
* 올바른 이메일과 패스워드를 입력 했는지 체크하고 그에 맞게 조건문 처리
<br><br>

### 로그인 화면
<br><br>
1-1. 초기화면<br>
   ![init_display](https://github.com/bedlam1/homework/assets/90903692/b7503b9e-4e27-4975-9e22-b642b24732c6)


1-2. 로그인 성공 후 화면<br>
![welcome_display](https://github.com/bedlam1/homework/assets/90903692/94e963db-8fb4-40b3-b104-cb25b5e23a44)


2-1. 아이디와 패스워드 형식이 안맞을 경우<br>
![invalid1](https://github.com/bedlam1/homework/assets/90903692/50175e2e-1f3c-4807-b3f1-b931b0f24f37)



2-2. 아이디와 패스워드가 올바르지 않을 경우<br>
![invalid2](https://github.com/bedlam1/homework/assets/90903692/79e963b5-1e52-43ea-9d48-1821f9f441b1)


<br><br>

### 코드<br>
* text를 인자로 받아 문자열로 바꾼뒤 소문자로 변환한다. 그리고 이메일과 패스워드의 형식이 맞는지 각각의 정규식을 통해 체크한뒤 형식이 맞으면 true, 맞지 않으면 false를 반환한다.<br> 
```
function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}
function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
```
<br>
* 
