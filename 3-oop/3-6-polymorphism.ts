{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        clean() {
            console.log('cleaning machine...')
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

        private grindBeans(shots: number) {
            console.log(`grinding bean for ${shots}`)
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans');
            }

            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
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

    class CaffeLatteMachine extends CoffeeMachine {
        // 객체 생성 시, 부모 클래스의 생성자를 호출해야 하며, 인수를 추가하고 싶다면 아래와 같이 하면 된다.
        constructor(beans: number, private readonly serialNumber: string) {
            super(beans);
        }

        private steamMilk() {
            console.log('Steaming some milk...');
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            };
        }
    }

    class SweetCoffeeMachine extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasMilk: true,
                hasSugar: true
            };
        }
    }

    // CoffeeMachine 클래스가 CoffeeMaker 인터페이스를 구현하므로, CaffeLatteMachine, SweetCoffeeMachine 모두 자기 자신과 CoffeeMachine 또는 CoffeeMaker 타입이 될 수 있다
    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 'SSS'),
        new SweetCoffeeMachine(16)
    ];
    machines.forEach(machines => {
        const coffee = machines.makeCoffee(2);
        console.log(coffee);
        console.log('-----------------------')
    })
}