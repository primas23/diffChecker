let jsdiff = require('diff');
let fs = require('fs');

const readFileOptrions = { encoding: 'utf-8' };

let dev = fs.readFileSync('testData/dev.app.config', readFileOptrions);
let local = fs.readFileSync('testData/local.app.config', readFileOptrions);

let diff = jsdiff.diffLines(dev, local);
diff.forEach((part) => {
    console.log(part);
});

