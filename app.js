// 첫 번째 화면의 "게임 시작" 버튼 클릭 시 두 번째 화면으로 전환
document.getElementById('start-game-btn').addEventListener('click', () => {
  console.log('게임 시작 버튼이 클릭되었습니다.');
  document.getElementById('screen1').classList.add('hidden');  // 첫 번째 화면 숨기기
  document.getElementById('screen2').classList.remove('hidden');  // 두 번째 화면 보이기
});

// 두 번째 화면의 상의 선택 및 색상 변경 로직
const topSelect = document.getElementById('top');  // '상의' 선택 요소 가져오기
const colorBoxes = document.querySelectorAll('.color-box');  // 색상 선택 상자 요소들 가져오기
const topImage = document.getElementById('top-image');  // 상의 이미지 요소 가져오기
const speechBubble = document.getElementById('color-speech-bubble');  // 말풍선 요소 가져오기

// 상의 종류 선택 시 상의 이미지 업데이트
topSelect.addEventListener('change', () => {
  const selectedTop = topSelect.value; //선택된 상의의 값을 가져옴
  
  // 선택한 상의에 맞는 이미지 파일 설정
  topImage.src = `images/${selectedTop}.png`;
  topImage.style.display = 'block';  // 상의 이미지를 보이도록 설정
  
  // 선택한 상의 종류를 말풍선에 표시
  speechBubble.textContent = `당신은 ${selectedTop}을 선택했습니다. 색상을 고르세요!`;
});

// 색상 선택 시 상의 색상 변경
colorBoxes.forEach(box => {
  box.addEventListener('click', (e) => {
      const selectedColor = e.target.getAttribute('data-color'); 
      
      // 선택한 색상으로 상의 이미지의 색상을 변경 (필터 사용)
      topImage.style.filter = `hue-rotate(${calculateHueRotation(selectedColor)}deg)`;

      // 선택한 색상을 말풍선에 표시
      speechBubble.textContent = `색상을 변경했습니다!`;
  });
});

// RGB 색상값을 HUE 회전 값으로 변환하는 함수
function calculateHueRotation(color) {
  // 간단히 빨강(0도), 초록(120도), 파랑(240도) 기준으로 회전값을 설정
  switch (color) {
      case '#ff0000': return 0;  // 빨강
      case '#00ff00': return 120; // 초록
      case '#0000ff': return 240; // 파랑
      case '#000000': return 0;   // 검정
      case '#ffffff': return 0;   // 흰색 (회전 없음)
      default: return 0;
  }
}
