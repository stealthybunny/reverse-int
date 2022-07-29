module.exports = function reverse (n) {
    const stringN = String(Math.abs(n));
    const l = stringN.length;
    let newN = '';
    for (i = l - 1; i >= 0; i--) {
        newN = newN + stringN[i];
    }
    return Number(newN);
}
