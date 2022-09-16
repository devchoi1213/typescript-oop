// 스택 자료구조를 구현하는 클래스 (ts에서 제공하는 자료구조를 사용해서는 안된다.)
/**
 * Stack class
 * 노출 메서드: push, pop
 * 캡슐화
  */

type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
}

interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    get size() {
        return this._size;
    }

    pop(): string {
        if(this.head == null){
            throw new Error('Stack is empty!')
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }

    push(value: string) {
        const node: StackNode = { value, next: this.head }
        this.head = node;
        this._size++;
    }

}

const stack = new StackImpl();
stack.push('test1');
stack.push('test2');
stack.push('test3');

while (stack.size !== 0) {
    console.log(stack.pop())
}


// type StackItem = {
//     data: string;
//     next: StackItem | undefined;
// };
// class StackClass implements Stack {
//     constructor(private top: StackItem | undefined = undefined) {
//         this.top = undefined;
//     }
//
//     empty(): boolean {
//         return this.top == undefined;
//     }
//
//     push(data: string) {
//         if(this.top == undefined) this.top = { data, next: undefined }
//         else this.top = { data, next: this.top }
//     }
//
//     pop(): string {
//         if(this.top == undefined) throw new Error('empty stack');
//
//         let top_data: string = this.top.data;
//         if(this.top.next == undefined) {
//             this.top = undefined;
//         } else {
//             this.top = this.top.next
//         }
//         return top_data;
//     }
//
//     peek(): string {
//         return "";
//     }
// }
//
// const stack = new StackClass();
// stack.push('test1');
// stack.push('test2');
// console.log(stack.pop())
// stack.push('test3');
// console.log(stack.pop())
// console.log(stack.pop())


