const { createInterface } = require("readline");

function solveTestCase(test) {
    const [, ...lines] = test.map(Number);
    const res = lines.reduce((acc,item)=>{
        let add = item % 4;
        if (item % 4 === 3) add = add - 1;
        return acc + Math.trunc(item/4) + add;
    },0)
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
