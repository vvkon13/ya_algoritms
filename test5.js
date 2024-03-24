const { createInterface } = require("readline");

function solveTestCase(test) {
    const [n, k, d] = test[0].split(' ');
    let tree = {
        prev: [n],
        result: []
    };
    let successZero = "";
    if (BigInt(n + 9) >= BigInt(d)) {
        for (let i = 0; i < d; i++) {
            if (i === 0) {

            }
            tree.prev.forEach((x) => {
                for (let j = 0; j <= 9; j++) {
                    if (BigInt(x + j) % BigInt(k) === 0n) {
                        tree.result.push(x + j);
                        if (j === 0) successZero = x;
                    }
                }
            });
            if (tree.result.length === 0) {
                break
            }
            if (successZero) {
                while (i < d) {
                    successZero = successZero + 0;
                    i++;
                }
                break;
            }
            if ((i + 1) < d) {
                tree.prev = tree.result;
                tree.result = [];
            }
        }
    }
    if (successZero) console.log(successZero)
    else if (tree.result.length>0) console.log(tree.result[0])
    else console.log(-1)
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