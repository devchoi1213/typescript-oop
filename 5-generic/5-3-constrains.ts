interface Employee {
    pay: () => void;
}

class FullTimeEmployee implements Employee{
    pay() {
        console.log('full time')
    }
    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log('part time')
    }
    workPartTime() {

    }
}

// 세부적인 타입(FullTimeEmployee, PartTimeEmployee)을 인자로 받아서 추상적인 타입(Employee)으로 다시 리턴하는 함수는 좋지않다.
function payBad(employee: Employee): Employee{
    employee.pay();
    return employee;
}

function pay<T extends Employee>(employee: T):T {
    return employee;
}

const choi = new FullTimeEmployee();
const bob = new PartTimeEmployee();

// pay 함수의 인자와 리턴 타입이 Employee이기 때문에 pay 함수 실행수 리턴된 객체는 FullTimeEmployee와 PartTimeEmployee의 workFullTime, workPartTime함수를 사용할 수 없게 된다.
const choiAfterPayBad = payBad(choi);
const bobAfterPayBad = payBad(bob);

// pay 함수가 Employee 인터페이스를 상속한 제네릭 타입으로 구현됐기 때문에 리턴되는 타입은 인자로 받은 FullTimeEmployee, PartTimeEmployee 타입이 된다.
const choiAfterPay = pay(choi); // FullTimeEmployee 타입
const bobAfterPay = pay(bob);   // PartTimeEmployee 타입


// generic constraints
function getValue<T, K extends keyof T, V>(obj: T, key: K):T[K]  {
    return obj[key];
}

const obj = {
    name: 'choi',
    age: 20,
}

const obj2 = {
    animal: 'dog ',
}

console.log(getValue(obj, 'name')); // choi
console.log(getValue(obj, 'age'));  // 20
// console.log(getValue(obj, 'score'));  // 에러 발생.