/**
 * Flattens a nested array (i.e., an array of arrays) into a single-level array.
 * @param array Input array
 */
export function flatten<T>(array: readonly T[]): T[]
export function flatten<T>(array: readonly T[][]): T[] {
	return array.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), [])
}
