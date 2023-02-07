export const findLongestWord = (words) => {
    let wordObjs = words.map(word => ({word, length: word.length}));
    return wordObjs.reduce((prev, current) => (prev.length > current.length) ? prev : current);
};