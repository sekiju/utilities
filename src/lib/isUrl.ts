/**
 * Verifies if the input string is a valid url
 * @param input The string to verify
 */
export const isUrl = (input: string): boolean => {
	try {
		return Boolean(new URL(input))
	} catch (_) {
		return false
	}
}
