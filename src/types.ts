export type Primitive = string | number | boolean | bigint | symbol | undefined | null

export type Builtin = Primitive | Function | Date | Error | RegExp

/**
 * A readonly array of any values.
 * @private
 */
export type Arr = readonly any[]

/**
 * A generic constructor with parameters
 */
export type Ctor<A extends Arr = readonly any[], R = any> = new (...args: A) => R

/**
 * A generic abstract constructor with parameters
 */
export type AbstractCtor<A extends Arr = readonly any[], R = any> = abstract new (...args: A) => R


/**
 * Type union for the full 2 billion dollar mistake in the JavaScript ecosystem
 */
export type Nullish = null | undefined
