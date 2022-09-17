{
    // Array
    const fruits: string[] = ['banana', 'apple'];
    const scores: Array<number> = [1, 2, 3];

    // readonly 륵성을 부여하고 싶다면 제네릭 형식이 아닌 string[] 형식을 사용해야 한다.
    function printArray(fruits: readonly string[]) {}

    // Tuple -> 가독성이 떨어지기 때문에 interface, type alias, class로 대체해서 사용하는 것이 좋다.
    let student: [string, number];
    student = ['Choi', 30];
    const [name, age] = student;
}