function examOne(first, second) {
  // 매개변수가 문자열일 경우, 다음과 같은 문자열이 나타나도록 작성하시오.
  // "문자열 데이터를 입력하였습니다."
  let sum = first + second;
  if (typeof (first) === 'string' || typeof (second) === 'string') {
    return "문자열 데이터를 입력하였습니다."; // typeof의 값을 String이 아닌 'string'으로 했어야 헀다.
  } else {
    return `${first} + ${second} = ${sum}`;
  }
}

function examTwo(first, second, third) {
  // 숫자여야만 실행되도록 타입을 확인하는 로직을 작성하시오.
  let sum = first * second * third;
  if(typeof(first) === 'number' && typeof(second) === 'number' && typeof(third) === 'number') {
    return `${first} * ${second} * ${third} = ${sum}`;
  }
}

function examThree(str) {
  // 문자열만 실행되도록 타입을 확인하는 로직을 작성하시오.
  // length 프로퍼티를 사용하지않고 길이값을 구하시오
  let count = 0;
  if(typeof(str) === 'string') {
    let arr = str.split("");
    for (i in arr) {
      count = count + 1;
    }
    return `문자열의 개수: ${count}`;
  }
}

function examFour(array) {
  // 배열만을 인자로 받아서 실행하도록 작성하시오.
  if(Array.isArray(array)) {
    let box = array[0];
    for(let i = 1; i < array.length; i++) {
      if(box < array[i]) {
        box = box;
      }
      else{
        box = array[i];
      }
    }
    return `배열의 최소값: ${box}`;
  }
}

function examFive(array) {
  // 배열만을 인자로 받아서 실행하도록 작성하시오.
  if(Array.isArray(array)) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return `배열의 총합: ${sum}`;
  }
}

console.log(examOne(2, 3)); //Q1 덧셈로직 만들기
console.log(examTwo(2, 3, 4)); //Q2 곱셈로직 만들기
console.log(examThree("hello")); //Q3 문자열 길이 구하기
console.log(examFour([5, 3, 6, 8, 2])); //Q4 최솟값 판별하기
console.log(examFive([1, 2, 3])); //Q5 배열 값 총합하기