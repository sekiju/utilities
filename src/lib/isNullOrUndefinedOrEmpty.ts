import { Nullish } from '../types'
import { isNullish } from './isNullOrUndefined'

/**
 * Checks whether or not a value is `null`, `undefined` or `''`, `[]`
 * @param value The value to check
 */
export const isNullOrUndefinedOrEmpty = (value: unknown): value is Nullish | '' => {
	return isNullish(value) || (value as string | unknown[]).length === 0
}

export { isNullOrUndefinedOrEmpty as isNullishOrEmpty }
