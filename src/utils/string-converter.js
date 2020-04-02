export function toHashPath(string) {
    return string.replace(/\s+/g, '-').toLowerCase();
}