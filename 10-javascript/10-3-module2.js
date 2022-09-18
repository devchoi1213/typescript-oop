// default로 export한 경우 {} 필요x, 네이밍 자유롭게 지을 수 있음. default가 아닌 경우 {} 필요, export된 네임 그대로 사용해야 함.
// 이름 변경하고 싶다면 as 사용.
import add, { print as printMessage } from './10-3-module1.js'
import * as calculator from './10-3-module1.js'
console.log(add(1, 5));
console.log(calculator.default(1,7));
calculator.print();