let array = [];

function addNumber() {
    const input = document.getElementById('numberInput').value;
    const number = Number(input);
    if (!isNaN(number)) {
        array.push(number);
        document.getElementById('arrayDisplay').textContent = 'Mảng đã nhập: ' + array.join(', ');
        document.getElementById('numberInput').value = '';
    } else {
        alert('Vui lòng nhập một số hợp lệ.');
    }
}
function resetNumber(){
    array = [];
    document.getElementById('arrayDisplay').textContent = '';
    document.getElementById('numberInput').value = '';
}

function sumPositiveNumbers() {
    const sum = array.reduce((acc, num) => num > 0 ? acc + num : acc, 0);
    document.getElementById('result-bai1').textContent = 'Tổng các số dương: ' + sum;
}

function countPositiveNumbers() {
    const count = array.filter(num => num > 0).length;
    document.getElementById('result-bai2').textContent = 'Số lượng các số dương: ' + count;
}

function findMinNumber() {
    if (array.length > 0) {
        const min = Math.min(...array);
        document.getElementById('result-bai3').textContent = 'Số nhỏ nhất: ' + min;
    } else {
        document.getElementById('result-bai3').textContent = 'Mảng trống.';
    }
}

function findMinPositiveNumber() {
    const positiveNumbers = array.filter(num => num > 0);
    if (positiveNumbers.length > 0) {
        const minPositive = Math.min(...positiveNumbers);
        document.getElementById('result-bai4').textContent = 'Số dương nhỏ nhất: ' + minPositive;
    } else {
        document.getElementById('result-bai4').textContent = 'Không có số dương trong mảng.';
    }
}

function findLastEvenNumber() {
    const lastEven = array.slice().reverse().find(num => num % 2 === 0);
    document.getElementById('result-bai5').textContent = lastEven !== undefined ? 'Số chẵn cuối cùng: ' + lastEven : 'Không có số chẵn trong mảng.';
}

// Bài Tập 6:
function swapValues() {
    const pos1 = parseInt(document.getElementById('position1').value);
    const pos2 = parseInt(document.getElementById('position2').value);
    const result = document.getElementById('result-bai6');

    if (isNaN(pos1) || isNaN(pos2) || pos1 < 0 || pos2 < 0 || pos1 >= array.length || pos2 >= array.length) {
        result.textContent = 'Vui lòng nhập vị trí hợp lệ trong mảng.';
        return;
    }

    // Swap the values
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;

    result.textContent = 'Mảng sau khi đổi chỗ: ' + array.join(', ');
    
}
//bai 7
function sortArray() {
    array.sort((a, b) => a - b);
    document.getElementById('result-bai7').textContent = 'Mảng sau khi sắp xếp tăng dần: ' + array.join(', ');
}

//bai8
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findFirstPrime() {
    const firstPrime = array.find(isPrime);
    document.getElementById('result-bai8').textContent = firstPrime !== undefined ? 'Số nguyên tố đầu tiên: ' + firstPrime : 'Không có số nguyên tố trong mảng.';
}

let realNumbersArray = [];
// Bài Tập 9: 
function addRealNumber() {
    const input = document.getElementById('realNumberInput').value;
    const number = Number(input);
    if (!isNaN(number)) {
        realNumbersArray.push(number);
        document.getElementById('realArrayDisplay').textContent = 'Mảng số thực đã nhập: ' + realNumbersArray.join(', ');
        document.getElementById('realNumberInput').value = '';
    } else {
        alert('Vui lòng nhập một số hợp lệ.');
    }
}
function countIntegers() {
    const integersCount = realNumbersArray.filter(num => Number.isInteger(num)).length;
    document.getElementById('result-bai9').textContent = 'Số lượng số nguyên trong mảng số thực: ' + integersCount;
}
//bai10
function comparePositiveNegative() {
    const positiveCount = array.filter(num => num > 0).length;
    const negativeCount = array.filter(num => num < 0).length;

    if (positiveCount > negativeCount) {
        document.getElementById('result-bai10').textContent = 'Số dương > số âm.';
    } else if (positiveCount < negativeCount) {
        document.getElementById('result-bai10').textContent = 'Số âm > số dương.';
    } else {
        document.getElementById('result-bai10').textContent = 'Số dương = số âm.';
    }
}
