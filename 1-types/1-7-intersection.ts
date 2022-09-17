{
    /**
     * Intersection Types: &
     */
    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function interWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    interWork({
        name: 'Choi',
        score: 1,
        employeeId: 12,
        work: () => {}
    })
}