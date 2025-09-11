function add(a, b) {
    return a + b;
}
const first = parseFloat(process.argv[2]);
const second = parseFloat(process.argv[3]);

console.log(add(first, second));