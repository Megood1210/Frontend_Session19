let c = String(prompt("Nhập một ký tự:"));
if (c.length === 1 && ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))) {
    console.log(c + " là chữ cái.");
} else {
    console.log(c + " không phải là chữ cái.");
}
