export function toHashPath(string) {
    return string.replace(/\s+/g, '_').toLowerCase();
}

export function toSearchQuery(string) {
    return string.replace('_', ' ');
}