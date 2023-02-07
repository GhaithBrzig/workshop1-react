export function countDistinctElements(arrays) {
    return arrays.flat().reduce((counts, element) => {
        counts[element] = (counts[element] || 0) + 1;
        return counts;
    }, {});
}