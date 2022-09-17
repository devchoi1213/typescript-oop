{
    function checkNotNullBad(arg: number | null):number {
        if(arg == null) {
            throw new Error('not valid number!');
        }

        return arg;
    }

    function checkNotNullAnyBad(arg: any | null):any {
        if(arg == null) {
            throw new Error('not valid number!');
        }

        return arg;
    }

    // T 타입 or null을 인자로 받는 함수
    // 어떤 타입을 인자로 넣어주냐에 따라 리턴하는 데이터 타입이 달라진다.
    function checkNotNull<T>(arg: T | null):T {
        if(arg == null) {
            throw new Error('not valid number!');
        }

        return arg;
    }

    const number = checkNotNull(123);   // number 타입
    const boal = checkNotNull(true);    // boolean 타입
}