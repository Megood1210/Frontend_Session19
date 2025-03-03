let number = +prompt("Nhap mot so");
if(number % 3 === 0){
    if(number % 5 === 0){
        document.write(`${number} chia hết cho cả 3 và 5`);
    }else if(number % 5 !== 0){
        document.write(`${number} chia hết cho 3`);
    }
}else if(number % 5 ===0){
        document.write(`${number} chia hết cho 5`);
}else{
    document.write(`${number} không chia hết cho cả 3 và 5`);
}