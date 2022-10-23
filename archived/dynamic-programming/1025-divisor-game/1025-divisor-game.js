/**
 * @param {number} n
 * @param {array} storage
 * @return {boolean}
 */
 var solver = function(n, storage) {
    // player cannot make a move
    if (n <= 1) {
        return false;
    }
    
    if (storage[n]) {
        return storage[n];
    }
    
    let x = Math.ceil(n/2);
    while(x >= 1) {
        if (n % x === 0) {
            // finding out opposite is win or lose
            const opposite = solver(n-x, storage);
            
            // if opposite is false, then the player win
            if (opposite === false) {
                return storage[n] = true;
            }
        }
        
        x--;
    }
    
    // can find a way to win
    return storage[n] = false;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    const storage = new Array(n+1);
    
    return solver(n, storage);
};


const n = 6;
divisorGame(n);
