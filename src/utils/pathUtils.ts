/**
 * Removes the hash and the part that follows it from the given path.
 * @param {string} path - The original path.
 * @returns {string} - The path without the hash and the part that follows it.
 */
export const removeHashFromPath = (path: string): string => {
  return path.split('#')[0];
};