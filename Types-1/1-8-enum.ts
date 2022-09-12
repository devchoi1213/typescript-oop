{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MONDAY = 0;
    const DAY_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1})

    // TypeScript (잘 사용 X. 대신 union 타입을 사용)
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    let day: Days = Days.Friday;
    day = Days.Tuesday;
    day = 10;   // 이러한 이유 때문에 타입스크립트에서는 enum 타입을 잘 사용하지 않는다.

    type DayOfWeek = 'Monday' | 'Tuesday' | 'Friday';   // enum 대신 union 타입으로 대체해서 사용
    let dayOfWeek: DayOfWeek = 'Monday';
}