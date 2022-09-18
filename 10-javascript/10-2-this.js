console.log(this);

function simpleFunc() {
    console.log(this);
}
simpleFunc();   // === window.simpleFunc()
console.clear();
class Counter {
    count = 0;
    increase = function () {
        console.log(this);
    }

    // 선언될 당시의 this context를 유지
    // increase = () => {
    //     console.log(this);
    // }
}
const counter = new Counter();
counter.increase(); // this = Counter
// const caller = counter.increase; // this = undefined
const caller = counter.increase.bind(counter);  // this = Counter
caller();

class Bob {

}
const bob = new Bob();
bob.run = counter.increase;
bob.run();  // this = Bob

// 함수나 var 변수는 선언 시 window 객체에 등록된다.
// const나 let 변수는 선언 새 window 객체에 등록되지 않는다.