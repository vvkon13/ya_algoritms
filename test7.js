const { createInterface } = require("readline");

function solveTestCase(test) {
    let x = Number(test[0]);
    let y = Number(test[1]);
    let z = 0;
    let p = Number(test[2]);
    let res = 0;

    if (x <= p) while (x > 0) {
        if (x > y) {
            z = z - (x - y)
            y = 0;
        }
        else y = y - x
        x = x - z;
        res = res + 1;
        if ((z <= 0) && (y <= 0)) break;
        if (y > 0) z = z + p;
    }
    else if (x >= y) res = 1;
    else {
        res = Math.ceil((y - x) / (x - p)) + 1;
        let k1 = 2;
        let k2 = 3;
        let n = 0;
        step = 2;
        while (true) {
            y1 = k2 / k1 * x - p;
            if ((y - x) - y1 < 0 && n===0)  n = 1
            else n = Math.ceil(((y - x) - y1) / (x - p)) + 1;
            if (n < 0) break;
            if (n + step <= res) res = n + step
            else break;
            k1 = k1 + k2;
            k2 = k2 + k1;
            step = step + 1;
        }
    }

    if (x > 0) console.log(res)
    else console.log(-1);
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