const { createInterface } = require("readline");

function solveTestCase(test) {
    const [G1, C1] = test[0].split(':').map(Number);
    const [G2, C2] = test[1].split(':').map(Number);
    const type = +test[2];

    let res = 0;
    if (G1 + G2 <= C1 + C2) {
        res = C1 + C2 - G1 - G2;
        switch (type) {
            case (1):
                if (C1 >= G2 + res) res = res + 1;
                break;
            case (2):
                if (C2 >= G1) res = res + 1;
                break;
        }
    }
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
