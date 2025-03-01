export const truncateText = (text, limit = 90) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
};