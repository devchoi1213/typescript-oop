// 모듈화를 하지 않는 경우 기본적으로 글로버 스코프로 측정됨. 다른 파일에서 사용 가능해진다.
export default function add(a, b) {
    return a + b;
}

export function print() {
    console.log('print...');
}