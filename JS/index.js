// if문 
let temperature = 322;

if (temperature <= 0) {
  console.log('물이 업니다.');
} else {
  if (temperature <= 100) {
  console.log('물이 얼지도 끓지도 않습니다.');
  } else {
    console.log('물이 끓습니다.');
  }
}

if (temperature <= 0) {
  console.log('물이 업니다.');
} else if (temperature <= 100) {
  console.log('물이 얼지도 끓지도 않습니다.');
  } else if (temperature <150 ) {
    console.log('물이 끓습니다.');
  } else {
    console.log('물이 모두 수증가가 되었습니다.');
  }


  function printGrade(midtermScore, finalScore){
    let totalScore = midtermScore + finalScore;

    if (totalScore >= 90) {
    console.log("A");
  } else if (totalScore >= 80) {
    console.log("B");
  } else if (totalScore >= 70) {
    console.log("C");
  } else if (totalScore >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
  
  // 테스트 코드
  printGrade(25, 35);
  printGrade(50, 45);
  printGrade(29, 24);
  printGrade(37, 42);