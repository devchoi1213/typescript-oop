{
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    function jsFetchNum(id: string): Promise<number> {
        // 왜 컴파일 에러 나는지 원인 파악 후 해결하기
        return new Promise((resolve, reject) => {
            resolve(100)
        })
    }

    // Optional parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Choi');
    printName('Choi', undefined);
    printName('Choi', null);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3));
    console.log(addNumbers(1, 2, 3, 4));
}