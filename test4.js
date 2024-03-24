const { createInterface } = require("readline");

function solveTestCase(test) {
    const rookStrike = (x, y, arr, chessboard, sizeArr, symbolDeath) => {
        arr[y][x] = symbolDeath;
        let xleft = x - 1;
        while (xleft >= 0) {
            if ((chessboard[y][xleft] === 'R') || (chessboard[y][xleft] === 'B')) break;
            arr[y][xleft] = symbolDeath;
            xleft = xleft - 1;
        }

        let xright = x + 1;
        while (xright < sizeArr) {
            if ((chessboard[y][xright] === 'R') || (chessboard[y][xright] === 'B')) break;
            arr[y][xright] = symbolDeath;
            xright = xright + 1;
        }

        let yup = y - 1;
        while (yup >= 0) {
            if ((chessboard[yup][x] === 'R') || (chessboard[yup][x] === 'B')) break;
            arr[yup][x] = symbolDeath;
            yup = yup - 1;
        }

        let ydown = y + 1;
        while (ydown < sizeArr) {
            if ((chessboard[ydown][x] === 'R') || (chessboard[ydown][x] === 'B')) break;
            arr[ydown][x] = symbolDeath;
            ydown = ydown + 1;
        }
    }

    const elephantPunch = (x, y, arr, chessboard, sizeArr, symbolDeath) => {
        arr[y][x] = symbolDeath;
        let i = y - 1;
        xleft = x - 1;
        xright = x + 1;
        StopMurderLeft = false;
        StopMurderRight = false;
        while (i >= 0) {
            if ((xleft < 0) || (chessboard[i][xleft] === 'R') || (chessboard[i][xleft] === 'B')) StopMurderLeft = true;
            if ((xright >= sizeArr) || (chessboard[i][xright] === 'R') || (chessboard[i][xright] === 'B')) StopMurderRight = true;
            if (StopMurderLeft && StopMurderRight) break;
            if (!StopMurderLeft) arr[i][xleft] = symbolDeath;
            if (!StopMurderRight) arr[i][xright] = symbolDeath;
            xleft = xleft - 1;
            xright = xright + 1;
            i = i - 1;
        }

        i = y + 1;
        xleft = x - 1;
        xright = x + 1;
        StopMurderLeft = false;
        StopMurderRight = false;
        while (i < sizeArr) {
            if ((xleft < 0) || (chessboard[i][xleft] === 'R') || (chessboard[i][xleft] === 'B')) StopMurderLeft = true;
            if ((xright >= sizeArr) || (chessboard[i][xright] === 'R') || (chessboard[i][xright] === 'B')) StopMurderRight = true;
            if (StopMurderLeft && StopMurderRight) break;
            if (!StopMurderLeft) arr[i][xleft] = symbolDeath;
            if (!StopMurderRight) arr[i][xright] = symbolDeath;
            xleft = xleft - 1;
            xright = xright + 1;
            i = i + 1;
        }
    }

    const matrixDeath = [];
    for (let i = 0; i < 8; i++) {
        matrixDeath[i] = [1, 1, 1, 1, 1, 1, 1, 1]
    }

    const res = test.map(item => item.split(''));

    res.forEach((item, y, chessboard) => item.forEach((el, x) => {
        if (el === 'R') {
            rookStrike(x, y, matrixDeath, chessboard, 8, 0)
        }
        if (el === 'B') {
            elephantPunch(x, y, matrixDeath, chessboard, 8, 0)
        }
    }));

    console.log(matrixDeath.reduce((acc, item) => {
        return acc + item.reduce((acc, item) => {
            return acc + item;
        }, 0)
    }, 0));

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