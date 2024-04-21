export type Nullable<T> = T | null;

export type Uncertain<T> = Undefinable<Nullable<T>>;

export type Undefinable<T> = T | undefined;
