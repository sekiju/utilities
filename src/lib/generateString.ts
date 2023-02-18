const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

/**
 * Generates string from latin chars with numbers
 * @param length Size of string
 */
export const generateString = (length: number): string => {
	return Array(length).join().split(',').map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join('')
}
