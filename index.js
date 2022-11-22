let n = Math.floor(Math.random() * 1000);
console.log(n);

while (true){
    nUser = prompt('Введите число от 0 до 999');
    if (isNaN(nUser)){
        alert('Вы ввели не число!')
    } else {
        if (+nUser > n) {
            alert('Введенное число больше загаданного');
        } else if (+nUser < n) {
            alert('Введенное число меньше загаданного');
        } else {
            alert('Вы угадали!');
            break;
        }
    };
};