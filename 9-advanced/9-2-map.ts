type Video = {
    title: string;
    author: string;
};

// mapped type
type Optional<T> = {
    [P in keyof T]?: T[P]  // for...in
}
type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}
type Nullable<T> = {
    [P in keyof T]: T[P] | null;
}

/**
 * {
 *     title?: string;
 *     author?: string;
 * }
 */
type VideoOptional = Optional<Video>;

/**
 * {
 *     readonly title: string;
 *     readonly author: string;
 * }
 */
type VideoReadOnly = ReadOnly<Video>;