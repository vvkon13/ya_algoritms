/* const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

async function test() {
    const str1 = await rl.question('Введите P и V: ');
    const str2 = await rl.question('Введите Q и M: ');
    const [p, v] = str1.split(' ');
    const [q, m] = str2.split(' ');
    let numberTreesBetweenChildren = Math.abs(+p - +q)-1;
    if (+m + +v < numberTreesBetweenChildren) numberTreesBetweenChildren = +m + +v;
    const numberOfTrees = +m + 1 + +v + 1 + numberTreesBetweenChildren;
    rl.write(numberOfTrees);
    rl.close();
}

test(); */

const { createInterface } = require("readline");

function solveTestCase(test) {
    const [P, V] = test[0].split(' ').map(Number);
    const [Q, M] = test[1].split(' ').map(Number);

    let res = 0;
    let numberTreesBetweenChildren = Math.abs(P - Q) - 1;
    if (numberTreesBetweenChildren + 1 + V < M) res = 2 * M + 1;
    else if (numberTreesBetweenChildren + 1 + M < V) res = 2 * V + 1;
    else if (M + V < numberTreesBetweenChildren) res = 2 * (M + V + 1);
    else res = M + 1 + V + 1 + numberTreesBetweenChildren;
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



