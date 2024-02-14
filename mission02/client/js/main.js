
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
 
*/

/**
 * 변경할 데이터 : 배경색, 메인 비주얼 이미지, 이름
 */


const nav = document.querySelector('nav');
const navListAll = document.querySelectorAll('nav li');
const visualImg = document.querySelector('.visual img');
const nickName = document.querySelector('.nickName');
let audio;

// 배경색
function setBgColor(index){
    document.body.style.background = `linear-gradient(to bottom, ${data[index-1].color[0]}, ${data[index-1].color[1]})`;
}

// 메인 비주얼 이미지
function setImage(index){
    visualImg.src = `./assets/${data[index-1].name}.jpeg`;
}

// 이름
function setNameText(index){
    nickName.textContent = data[index-1].name;
}

// 오디오
function SoundPlay(index){
    audio = new Audio(`./assets/audio/${data[index-1].name}.m4a`);
    audio.play();
}

function handleNav(e){
    const target = e.target.closest('li');
    if(!target) return 0;

    const index = target.dataset.index;

    console.log(target);

    // 배경색  
    setBgColor(index);

    // 메인 비주얼 이미지
    setImage(index);

    // 이름
    setNameText(index);
    
    // nav list border 처리
    navListAll.forEach(li => li.classList.remove('is-active'));
    target.classList.add('is-active');

    // 오디오
    SoundPlay(index);
}


nav.addEventListener('click', handleNav);







