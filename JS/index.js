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
}




  
  // 테스트 코드
  printGrade(25, 35);
  printGrade(50, 45);
  printGrade(29, 24);
  printGrade(37, 42);



 // 서열정리 
// 나의 나이와, 나의 성별을 저장하는 변수입니다.
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수입니다.
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성해 주세요.
  if (myAge === yourAge) {
    return callFriend;
  } else if (myAge > yourAge) {
    if (yourGender === 'male') {
      return callYoungerBrother;
    } else if (yourGender === 'female') {
      return callYoungerSister;
    }
  } else {
    if (yourGender === 'male') {
      return callOlderBrother;
    } else if (yourGender === 'female'){
      return callOlderSister;
    }
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);



// 평균 내기 ~~ 구구단 식이랑 같이 걍 외워버랴!!!!!!

let array = [10, 20, 30, 40, 50];
let result = 0;

for (let value of array) {
  result += value;
}
console.log(result/array.length);

// for : in은 인덱스값 출력 / of는 값을 출력


// 1에서 100까지 합하기 
let i = 1;
let sum = 0; 

while (i <= 100) {
    if (i % 2 == 0) {
        sum += i;
    }
    i++;
}

console.log(sum);






// for문 구구단
for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    document.write(`${i} X ${j} = ${i*j} <br>`);
  }
}



// while문 구구단 
let i = 2;
let j = 1;

while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i*j}`);
    j++;
  }
  i++;
  j = 1;
}

// j = 1; 초기화 

// 저희 구구단을 외울 때
// 2*1=2
// 2*2=4
// 2*3=6 
// ...

// 이런식으로 뒤에 곱하는 값이 1씩 커지잖아요? 그리고 한 단이 끝나면 다음 단으로 넘어가구요.

// 여기서 i=2, j=1이기 때문에 j++를 통해 j가 1씩 증가하면서 i와 곱해지고 9까지 다 곱하면 이제는 다음 단으로 넘어가야겠죠? 
// 다음 단으로 넘어갈 때는 i++를 통해 i에 값이 1 증가하게 되면서 3이 되고, 이때 j가 그대로 9라면 39가 되기 때문에 j=1으로 초기화하는 것이에요.
// 그럼 31=3으로 3단이 시작됩니다. ㅎㅎ
// 반복문 진행과정을 손으로 쭉 써보시면 이해가 되실 거에요! i가 2일때부터 9가 될 때까지요! 



//j=1를 밑에서 왜 한번더 적었는지 -- 두번째 while문을 돌면서 j가 9가 되어서 다시 1로 돌려주는거에요


// 구구단 4단까지 
let i = 2;
let j = 1;
while (i < 10) {
  if (i == 5){
    break;
  }
  while (j < 10) {
    console.log(`${i} X ${j} = ${i*j}`);
    j++;
  }
  i++;
  j = 1;
}

let i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i*j}`);
    if (j == 5){
        break;
    }
    j++;
  }
  i++;
  j = 1;
}


// console.dir() 이랑 console.log()  차이가 
// console.log는 요소를 HTML과 같은 트리 구조로 출력합니다. console.dir은 요소를 JSON과 같은 트리 구조로 출력합니다. 만 있는건가요~~~?
// console.log로 함수를 출력하면 함수의 코드가 출력되고,
// console.dir로 함수를 출력하면 함수의 속성이 출력된다. 

// console.log 와 retrun의 차이는
// 입력만 하는 상황 / 출력까지 되는 상황