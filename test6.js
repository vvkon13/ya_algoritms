const { createInterface } = require("readline");

const getOddNumber = (x, y) => {
    if (x % 2 === 0) return '+'
    else if (y % 2 === 0) return '+'
    else return 'x'
}

const checkBothEvenNumbers = (x, y) => {
    if ((x % 2 === 0) && (y % 2 === 0)) return true
    else return false
}

function solveTestCase(test) {
    const arr = test[1].split(' ').map(Number);
    const res = arr.reduce((acc, item, index, a) => {
        if (a.length - index === 1) return acc
        if (checkBothEvenNumbers(item, a[index + 1])) return acc = acc + "x"
        else {
            acc = acc + getOddNumber(item, a[index + 1]);
            a[index + 1] = 1;
            return acc;
        }
    }, "")

    console.log(res);
}

const lines = [];
createInterface({
    input: process.stdin,
    output: process.stdout,
}).on("line", (line) => {
    lines.push(line.toString().trim());
}).on("close", () => {
    solveTestCase(lines);
});