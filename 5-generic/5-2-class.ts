interface Either<L ,R> {
    left: () => L;
    right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {
    }

    left(): L {
        return this.leftValue;
    }

    right(): R {
        return this.rightValue;
    }
}

const either = new SimpleEither(4, 5);  // Either<number, number>
either.left();  // 4
either.right(); // 5

const best = new SimpleEither({name: 'choi'}, 'hello'); // 제네릭 타입으로 인해 어떤 타입이던 인수로 건네줄 수 있다.
best.left();    // {name: 'choi'}
best.right();   // hello