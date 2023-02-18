/**
 * Limiting number by min and max values
 * @param input Input number
 * @param min Minimum value of input
 * @param max Minimum value of input
 */
export const clamp = (input: number, min: number, max: number): number => Math.min(Math.max(input, min), max)
