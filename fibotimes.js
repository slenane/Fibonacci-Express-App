const math = require('./math');

// for (let num = 1; num < 40; num++) {
//     let now = new Date().toISOString();
//     console.log(`${now} Fibonacci for ${num} = ${math.fibonacci(num)}`);
// }

(async () => {
    for (let num = 1; num < 8000; num++) {
        await new Promise((resolve, reject) => {
            math.fibonacciAsync(num, (err, fibo) => {
                if (err) reject(err);
                else {
                    let now = new Date().toISOString();
                    console.log(`${now} Fibonacci for ${num} = ${fibo}`);
                    resolve();
                }
            });
        });
    }
})().catch(err => { console.log(err) });