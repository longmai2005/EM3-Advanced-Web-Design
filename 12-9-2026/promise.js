function sumNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('Hai số phải là kiểu number');
        } else {
            const sum = a + b;
            resolve(sum);
        }
    });
}

const a = 5;
const b = 3;
sumNumbers(a, b)
    .then(sum => {
        console.log('Tổng của', a, 'và', b, 'là:', sum);
    })
    .catch(error => {
        console.error(error);
    });