let months = +prompt("Nhap mot thang");
if(months >= 1 && months <=3 ){
    document.write("Mùa xuân");
}else if(months >= 4 && months <=6){
    document.write("Mùa hè");
}else if(months >= 7 && months <=9){
    document.write("Mùa thu");
}else if(months >= 10 && months <=12){
    document.write("Mùa đông");
}else{
    document.write("Tháng không hợp lệ");
}