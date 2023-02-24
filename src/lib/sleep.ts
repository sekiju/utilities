
/**
 * Sleep before run next code
 * @param ms The value for sleep in milliseconds
 */
export const sleep = (ms: number): Promise<unknown> => new Promise<unknown>(resolve => setTimeout(resolve, ms))
