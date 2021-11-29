let result = 0;

for (let x = 0; x < 101; x++) {
    // console.log(x);
    if (x % 3 == 0 || x % 5 == 0){
        // console.log(x);
        result += x //  result = result + x
    }
}

console.log(result);

// 2418
//(number % 3 == 0) => 3으로 나누었을때 나머지가 0인가? 
// => 3으로 나누어떨어지는가? => 3의 배수인가? 

// 1. false || true       
// 2. true && false
// 3. !true
// 4. !((true && false) || (true && false))
// 5. let x = 10
//    !((x % 5 == 0 && x % 2 == 0) || (x / 2 == 5 && false))
// 6. let y = 10
//    (false && y % 2 == 0) && (y / 2 == 5 && false)
// 7. let z = 3
//    (true && z % 3 == 0) || (z / 2 !== 5 && false) // !==는 잘못된 문법입니다.ㅎㅎ
// ---
// // 드모르간 법칙
// !(x || y) === (!x && !y)
// !(x && y) === (!x || !y)
// ---
// // 3항연산자 대체 용법
// true && '완료' || '미완료';


