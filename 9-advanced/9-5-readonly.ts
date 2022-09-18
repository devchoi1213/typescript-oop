{
    type ToDo = {
        title: string;
        description: string;
    }

    // Readonly는 미리 정의되어진 유틸리티 mapped type
    function display(todo: Readonly<ToDo>) {
    }
}