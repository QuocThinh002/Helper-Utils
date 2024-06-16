/**
 * Create a URL-friendly slug from a Vietnamese string.
 * 
 * This function:
 * 1. Normalizes the string to decompose diacritics (e.g., ă -> a).
 * 2. Removes all diacritics.
 * 3. Converts to lowercase.
 * 4. Replaces spaces with hyphens.
 *
 * @param {string} inputString - The Vietnamese string to convert to a slug.
 * @returns {string} The URL-friendly slug.
 */
function convertVietnameseSlug(inputString) {
    return inputString
        .normalize('NFD')      // Decompose diacritics (e.g., ă -> a)
        .replace(/[\u0300-\u036f]/g, "") // Remove all diacritics
        .toLowerCase()           // Convert to lowercase
        .trim()                 // Remove leading and trailing spaces
        .replace(/\s+/g, '-')    // Replace multiple spaces with a single hyphen
        .replace(/-+/g, '-');    // Replace multiple hyphens with a single hyphen
}
