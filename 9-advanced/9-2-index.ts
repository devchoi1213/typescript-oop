{
    const obj = {
        name: 'choi'
    }
    obj.name;
    obj['name'];

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    type Name = Animal['name'];  // string

    type Gender = Animal['gender'];  // 'male' | 'female'

    type Keys = keyof Animal ;   // 'name' | 'age' | 'gender'
    const key: Keys = 'gender'

    type Person = {
        name: string;
        gender: Animal['gender'];
    }
    const person: Person = {
        name: 'choi',
        gender: 'male',
    }
}