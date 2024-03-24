const { createInterface } = require("readline");

function solveTestCase(test) {
    const [L, x1, v1, x2, v2] = test[0].split(' ').map(Number);

/*     console.log((Math.PI * L * 1 / 180 - x1 - x2) / (v1 + v2));
    console.log((Math.PI * L * 1 / 180 - x1 + x2) / (v1 - v2));
    console.log((Math.PI * L * (1 + 1 / 2) / 180 - x1 - x2) / (v1 + v2));
    console.log((Math.PI * L * (1 + 1 / 2) / 180 - x1 + x2) / (v1 - v2));
 */

    console.log((x2-x1)/(v1-v2));
    console.log(-(x2+x1)/(v1+v2));
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