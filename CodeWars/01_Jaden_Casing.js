String.prototype.toJadenCase = function() {
    let answer = '';
    for (let s of this.split(" ")) {
        answer += (s.charAt(0).toUpperCase() + s.slice(1) + " ");
    }
    return answer.trim();
}

const str = 'How can mirrors be real if our eyes aren\'t real';
str.toJadenCase() // "How Can Mirrors Be Real If Our Eyes Aren't Real"
console.log(str.toJadenCase())