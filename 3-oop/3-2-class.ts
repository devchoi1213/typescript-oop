{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMachine {
        static BEANS_GRAM_PER_SHOT: number = 7; //class level
        coffeeBeans: number = 0;    // instance level


        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
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

    const coffeeMachine = new CoffeeMachine(100);
    const coffeeMachine2 = CoffeeMachine.makeMachine(100);
    const coffee = coffeeMachine.makeCoffee(2);
    console.log(coffee)
}