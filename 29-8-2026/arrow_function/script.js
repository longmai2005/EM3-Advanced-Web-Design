// var hello = (name, message) => {
//     console.log("Chào " + name + ", ban that " + message);

// }

// hello('My', 'dep trai hihi');

// Không có tham số
// var hello = () => {
//     console.log("Chào bạn, ban that dep trai hihi");
// }

// hello();


// ko có tham số
function sumChan() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

function sumLe() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

console.log("Tổng số chẵn:", sumChan());
console.log("Tổng số lẻ:", sumLe());

//có tham số
function sumChan(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

function sumLe(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

console.log("Tổng số chẵn:", sumChan(10));
console.log("Tổng số lẻ:", sumLe(10));