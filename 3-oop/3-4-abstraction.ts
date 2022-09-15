{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMachine {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMaker implements CoffeeMachine, CommercialCoffeeMachine {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        clean() {
            console.log('cleaning machine...')
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            console.log(`grinding bean for ${shots}`)
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans');
            }

            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
        }

        private preheat() {
            console.log(`heating up...`);
        }

        private extract(shots: number): CoffeeCup {
            console.log(`pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    // 인터페이스를 사용하면 클래스 사용 규약을 더 명확하게 구분할 수 있다.
    const maker: CoffeeMaker = CoffeeMaker.makeMachine(100);
    // maker.fillCoffeeBeans(32)
    // maker.makeCoffee(2);

    const maker2: CoffeeMachine = CoffeeMaker.makeMachine(100);
    // maker2.makeCoffee(2);

    const maker3: CommercialCoffeeMachine = CoffeeMaker.makeMachine(100);
    // maker3.fillCoffeeBeans(32);
    // maker3.makeCoffee(2);
    // maker3.clean();

    class AmateurUser {
        constructor(private machine: CoffeeMachine) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMachine) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            this.machine.fillCoffeeBeans(32);
            this.machine.clean();
        }
    }

    // 같은 CoffeeMaker 객체를 전달해주었음에도 각 클래스의 생성자에서 지정한 machine 타입 지정을 다르게 함으로써 역할을 제한할 수 있다.
    const maker4: CoffeeMaker = CoffeeMaker.makeMachine(32);
    const amateur = new AmateurUser(maker4);
    const pro = new ProBarista(maker4);

    // 같은 메소드지만 다른 기능
    amateur.makeCoffee();
    pro.makeCoffee();
}