{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'ellie';

    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'Choi',
        age: 30
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let choiName: Name;
    choiName = 'name';

}