let number1 =+prompt("Nhap vao so thu nhat");
let number2 =+prompt("Nhap vao so thu hai");
let number3 =+prompt("Nhap vao so thu ba");
if(number1>number2 & number1>number3){
    document.write(`Số lớn nhất trong 3 số là ${number1}`);
}else if(number2>number1 & number2>number3){
    document.write(`Số lớn nhất trong 3 số là ${number2}`);
}else{
    document.write(`Số lớn nhất trong 3 số là ${number3}`);
}