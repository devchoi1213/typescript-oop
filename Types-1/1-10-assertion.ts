{
    /**
     * Type Assertions
     */
    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));  // 컴파일 에러 발생 X, 런타임 에러 발생함. (되도록 사용 안하는 이유)

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2)    // 타입이 number[] | undefined 이지만 undefined가 아니라고 확신하는 경우
}