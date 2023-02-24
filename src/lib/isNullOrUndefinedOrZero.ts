import { isNullish } from './isNullOrUndefined'
import { Nullish } from '../types'

/**
 * Checks whether or not a value is `null`, `undefined` or `0`
 * @param value The value to check
 */
export const isNullOrUndefinedOrZero = (value: unknown): value is Nullish | 0 => {
	return value === 0 || isNullish(value)
}

export { isNullOrUndefinedOrZero as isNullishOrZero }
