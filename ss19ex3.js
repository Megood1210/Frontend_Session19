let choose = prompt("Nhap tien moi doi (USD hay VND)");
if( choose === "VND"){
    let VND = prompt("VND-->USD:");
    let dollars = VND/23000;
    document.write(VND + "đ" + "=" + "$" + dollars);
} else if(choose === "USD"){
    let dollars = prompt("USD-->VND:");
    let VND = dollars*23000;
    document.write("$" + dollars + "=" + VND + "đ");
}else{
    document.write("Gia tri khong hop le");

}