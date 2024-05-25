export type Undefinable<T> = T | undefined;

export type Nullable<T> = T | null;

export type Uncertain<T> = Undefinable<Nullable<T>>;

export type Long<N> = string & {
	0: string;
	length: N;
};

export type Inputable = HTMLInputElement | HTMLTextAreaElement;
