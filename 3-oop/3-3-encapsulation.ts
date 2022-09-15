{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private : 클래스 외부에서 접근 불가능
    // protected : CoffeeMachine 를 상속한 다른 클래스 내에서만 접근 가능
    class CoffeeMachine {
        private static BEANS_GRAM_PER_SHOT: number = 7; //class level
        private coffeeBeans: number = 0;    // instance level

        private constructor(coffeeBeans: number) {  // 생성자를 사용하지 않도록 의도하려면 클래스 사용자가 알 수 있도록 private 접근 제어자를 지정해줘야 한다.
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans');
            }

            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }

    // const coffeeMachine = new CoffeeMachine(100);
    const coffeeMachine2 = CoffeeMachine.makeMachine(100);
    const coffee = coffeeMachine2.makeCoffee(2);
    console.log(coffee)


    class User {
        private internalAge = 4;

        // getter, setter를 사용하는 이유?? -> 멤버 변수나 클래스 변수들을 클래스 설계자가 원하는대로 사용되도록 하기 위해서.
        // 예를 들어 internalAge가 함수 외부에서 변경 가능하다면 이상한 숫자 집어넣어서 클래스가 원하는 대로 동작이 안될수도 있기 때문.
        get fullName (): string {
            return `${this.firstName} ${this.lastName}`
        }

        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            if (num <= 0) throw new Error('Age should be greater than 0')
            this.internalAge = num;
        }

        constructor(private firstName: string, private lastName: string) {  // 생성자의 인수에 접근 제어자를 설정해두면 바로 멤버변수로 설정이 된다.
        }
    }

    const user = new User('Steve', 'Jobs');
    user.age = 6;
    console.log(user.fullName)
}