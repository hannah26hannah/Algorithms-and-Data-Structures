function solution(words) {
    return words.split(" ").map(word => {
        let new_word = "";
        for (let i = 0; i < word.length; i++) {
            new_word += (i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase())
        }
        return new_word
    }).join(" ");
    
}

/**
 *  함수 호출하는 다른 방법
 * 
    new_word += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
 */