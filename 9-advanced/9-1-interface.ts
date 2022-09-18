// 어떤 규격 사항을 정의하는 것이라면 Type이 아닌 Interface를 사용해야 한다.
// 데이터의 타입을 정의하는 것이라면 Interface가 아닌 Type을 사용해야 한다.

type PositionType = {
    x: number;
    y: number;
}

interface PositionInterFace {
    x: number;
    y: number;
}

// object
const obj1: PositionType = {
    x: 10,
    y: 20
}
const obj2: PositionInterFace = {
    x: 10,
    y: 20,
    z: 10
}

//class
class Pos1 implements PositionType {
    x:number;
    y: number;
}
class Pos2 implements PositionInterFace {
    x:number;
    y: number;
    z: number;
}

// Extends
interface ZPositionInterface extends PositionInterFace {
    z: number;
}
type ZPositionType = PositionType & { z: number };

// only interfaces can be merged.
// 이전에 선언한 PositionInterFace 인터페이스에 머지 되어 PositionInterFace를 구현하는 구현체는 x, y, z속성 모두를 구현해야 한다.
interface PositionInterFace {
    z: number;
}

// Type aliases can use computed properties
type Person = {
    name: string,
    age: number,
}
type Name = Person['name']; //string 타입

type NumberType = number;
type Direction = 'left' | 'right'