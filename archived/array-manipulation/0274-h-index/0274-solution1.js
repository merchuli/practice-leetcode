/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    const sortedCitations = [...citations].sort((a, b) => b - a);
    let h = 0;
    while (h < citations.length) {
        if (sortedCitations[h] < h+1) {
            break;
        }
        
        h++;
    }
    
    return h;
};


// Runtime: 66 ms, faster than 90.45% of JavaScript online submissions for H-Index.
// Memory Usage: 42.6 MB, less than 26.11% of JavaScript online submissions for H-Index.