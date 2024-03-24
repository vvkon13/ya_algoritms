const { createInterface } = require("readline");

function solveTestCase(test) {
    const [n, k, d] = test[0].split(' ');
    let x = n;
    let success = false;
    if (Number(n + 9) >= Number(d)) {
        for (let i = 0; i < d; i++) {
            if (i === 0) {
                for (let j = 0; j <= 9; j++) {
                    if (Number(x + j) % Number(k) === 0) {
                        success = true;
                        x = x + j;
                        break;
                    }
                }
            }
            else if (success) {
                x = x + 0;
            }

            if (!success) break;
        }
    }
    if (success) console.log(x)
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