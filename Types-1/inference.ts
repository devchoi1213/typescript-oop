/**
 * Type Inference
 * 간단한 경우는 타입 추론하도록 하지만 대부분의 경우엔 타입을 명시하는 습관을 들일 것.
 */
let text = 'hello'; // 타입 추론
text = 'test';
// text = 1;    // 에러 발생;
function print(message = 'hello') { // 타입 추론
    console.log(message);
}

function add(x: number, y: number) {    // return 타입에 대한 추론
    return x + y;
}
const result = add(1, 3);   // add 함수의 리턴값이 number이기 때문에 result의 타입은 자동으로 number로 추론