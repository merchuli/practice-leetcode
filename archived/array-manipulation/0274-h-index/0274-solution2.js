/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    const sortedCitations = [...citations].sort((a, b) => b - a);
    
    let startIndex = 0;
    let endIndex = sortedCitations.length - 1;
    while (startIndex <= endIndex) {
        const mid = Math.floor((startIndex + endIndex)/2);
        
        if (sortedCitations[mid] >= mid + 1) {
            startIndex = mid + 1;
        } else {
            endIndex = mid - 1;
        }
    }
    
    return startIndex;
};

// Runtime: 91 ms, faster than 46.50% of JavaScript online submissions for H-Index.
// Memory Usage: 42.3 MB, less than 43.31% of JavaScript online submissions for H-Index.