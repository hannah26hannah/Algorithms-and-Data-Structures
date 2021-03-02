// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
    let sum = 0;
    if (a === b) {
        sum = a;
    } else {
        const max = Math.max(a, b);
        const min = Math.min(a, b);
        for (let i = min; i <= max; i++) {
            sum += i
        }
    }
    return sum
}
console.log(getSum(-1, 2))