import { readdirSync } from 'fs'
import { resolve } from 'path'
import { isNullish } from './isNullOrUndefined'

/**
 * Fetches file paths from a directory
 * @param dir Directory with files
 * @param includeSubdirectories Include subdirectories
 */
export const fetchFiles = async (dir: string, includeSubdirectories = false): Promise<string[]> => {
	const dirents = readdirSync(dir, { withFileTypes: true })
	const files = await Promise.all(dirents.map((dirent) => {
		const res = resolve(dir, dirent.name)
		return dirent.isDirectory() ? !includeSubdirectories ? undefined : fetchFiles(res) : res
	})).then(files => files.filter(isNullish))
	return Array.prototype.concat(...files)
}
