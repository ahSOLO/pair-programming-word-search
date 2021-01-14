const wordSearch = (letters, word) => { 

    if (letters[0].length === 0) {
        return undefined;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalLetters = [];
    for (let i = 0; i < letters[0].length; i++) {
        verticalLetters[i] = [];
        for (let j = 0; j < letters.length; j++) {
            if (letters[j]) {
                verticalLetters[i].push(letters[j][i]);
            }
        }
    }
    const verticalJoin = verticalLetters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
  
    // Code for diagonal checks
    let longest = Math.max(letters.length, letters[0].length);
    const diagonalLetters = [];
    for (let i = -longest; i < longest; i++) {
        diagonalLetters[i + longest] = [];
        for (let j = 0; j < longest; j++) {
            let success = true;
            if ((i + j) >= 0) {
                try {
                    (letters[i + j][j])   
                } catch (err) {
                    success = false;
                }
                if (success === true) {
                    diagonalLetters[i + longest].push(letters[i + j][j]);
                }
            }
        }
    }
    
    // Diagonal check
    const diagonalJoin = diagonalLetters.map(ls => ls.join(''))
    for (l of diagonalJoin) {
        if (l.includes(word)) return true
    }

    // Reverse diagonal check
    const diagonalReverseJoin = diagonalLetters.map(ls => ls.reverse().join(''))
    for (l of diagonalReverseJoin) {
        if (l.includes(word)) return true
    }

    const horizontalReverseJoin = letters.map(ls => ls.reverse().join(''))
    for (l of horizontalReverseJoin) {
        if (l.includes(word)) return true
    }
    const verticalReverseJoin = verticalLetters.map(ls => ls.reverse().join(''))
    for (l of verticalReverseJoin) {
        if (l.includes(word)) return true
    }

    return false;
}

module.exports = wordSearch