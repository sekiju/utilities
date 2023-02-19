import { isObject } from './isObject'
import { AnyObject } from '../types'

/**
 * Clean undefined and null values from object
 * @param target The object to clean
 */
export const cleanObject = (target: unknown) => {
	if (!isObject(target))
		return target
	if (target instanceof Array)
		return [...target]
	const newObj: AnyObject<any> = { ...target }

	Object.keys(newObj).forEach((key) => {
		if (newObj[key] === undefined || newObj[key] === null)
			delete newObj[key]
	})

	return newObj
}
