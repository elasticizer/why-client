export function sleep<T>(ms: BigInt, data?: T): Promise<T> {
	return new Promise(
		resolve => setTimeout(resolve, Number(ms), data)
	);
}
