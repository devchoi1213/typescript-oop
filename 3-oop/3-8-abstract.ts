{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // abstract 클래스 자체는 객체를 생성할 수 없다.
    // 공통적으로 사용하는 기능은 일반 메서드로 구현하고 클래스마다 다르게 구현되어야 하는 메서드는 abstract로 지정해서 각 클래스마다 다르게 구현해준다.
    // abstract 클래스를 상속하는 클래스는 반드시 abstract 메서드를 구현해야 한다.
    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        clean() {
            console.log('cleaning machine...')
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

        protected abstract extract(shots: number): CoffeeCup;

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

        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMachine extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(16, 'SSS'),
        new SweetCoffeeMachine(16)
    ];
    machines.forEach(machines => {
        const coffee = machines.makeCoffee(2);
        console.log(coffee);
        console.log('-----------------------')
    })
}