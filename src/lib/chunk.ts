/**
 * Splits an array into smaller arrays of a specified size
 * @param array Input array
 * @param size Size of smaller array
 */
export const chunk = <T = any>(array: T[], size: number): T[][] => {
	return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size))
}
