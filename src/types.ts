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
 * A generic constructor without parameters
 */
export type Constructor<T> = new (...args: any[]) => T;

/**
 * A generic abstract constructor without parameters
 */
export type AbstractConstructor<T> = abstract new (...args: any[]) => T;

/**
 * Type union for the full 2 billion dollar mistake in the JavaScript ecosystem
 */
export type Nullish = null | undefined

/**
 * An object that is non nullable, to bypass TypeScript not easily working with {@link Record}<{@link PropertyKey}, unknown> in various instances.
 */
export type NonNullObject = {} & object

/**
 * An object that can have any structure, this is an alternative to {@link NonNullObject} for situations where
 * that leads to unexpected type resolutions.
 *
 * Note that this is still a strictly typed type, it is not simply aliasing `any`
 */
export type AnyObject<T> = {
	[K in keyof T]: T[K]
}
