{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };

    // 기존의 타입 중에서 부분적인 것만 허용하고 싶을때 용이 
    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return { ...todo, ...fieldsToUpdate }
    }
    const todo: ToDo = {
        title: 'learn TypeScript',
        description: 'stody hard',
        label: 'study',
        priority: 'high'
    }
    const updated = updateTodo(todo, {priority: 'low'});
    console.log(updated)
}