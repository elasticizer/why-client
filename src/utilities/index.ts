import type { Inputable } from '@/types';

export function sleep<T>(ms: BigInt, data?: T) {
	return new Promise<T>(resolve => setTimeout(resolve, Number(ms), data));
}
