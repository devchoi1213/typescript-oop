{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array, ...
     */

    // number
    const num: number = 1;

    // string
    const str: string = 'test';

    // boolean
    const bool: boolean = true;

    // undefined (값이 비었는지 아닌지 확실하지 않은 경우)
    let undef: undefined;   // (가능하면 사용 X)
    let age: number | undefined;
    age = undefined;
    age = 11;
    function find(): number | undefined {
        return undefined;    // return undefined or number
    }

    // null (값이 비어있는 경우 )
    let null_: null;   // (가능하면 사용 X)
    let person: string | null;

    // unknown (가능하면 사용 X)
    let notSure: unknown;
    notSure = 'he';
    notSure = true;

    // any (가능하면 사용 X)
    let anything: any;
    anything = 'he';
    anything = true;

    // void undefined를 리턴하는 함수
    function print(): void {
        console.log('Hello')
    }

    // never 에러를 던지거나 루프를 진행하는 함수인 경우
    function throwError(message: string): never {
        // throw error
        throw new Error(message);

        // or exec loop
        while (true) {};

    }

    // object (가능하면 사용 X)
    let obj: object = [1, 4];
    function acceptSomeObject(obj: object) {
        acceptSomeObject({name: 'choi'});
        acceptSomeObject({animal: 'dog'});
    }
}