// 스택 자료구조를 구현하는 클래스 (ts에서 제공하는 자료구조를 사용해서는 안된다.)
/**
 * Stack class
 * 노출 메서드: push, pop
 * 캡슐화
  */

type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
}

interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
}

class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    constructor() {
    }

    get size() {
        return this._size;
    }

    pop(): T {
        if(this.head == null){
            throw new Error('Stack is empty!')
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }

    push(value: T) {
        const node = { value, next: this.head }
        this.head = node;
        this._size++;
    }

}

const stack = new StackImpl<string>();
stack.push('test1');
stack.push('test2');
stack.push('test3');

const stack2 = new StackImpl<number>();
stack2.push(1);
stack2.push(2);
stack2.push(3);

const stack3 = new StackImpl();
stack3.push('test1');
stack3.push(2);
stack3.push({test: 'test1'});

while (stack.size !== 0) {
    console.log(stack.pop())
}


