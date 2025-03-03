let string = prompt("Nhap chuoi");
let word = string.split(" ");
let text = word.length;
if(text > 1){
    document.write("Chuỗi chứa dấu cách");
}else {
    document.write("Chuỗi không chứa dấu cách");
}
document.write(word);