const otpGenerator = (digit) => {
    let num = '0123456789'
    let otp = ''
    for (let i = 1; i <= digit; i++) {
        otp += num[Math.floor(Math.random() * 10)]
    }
    return otp
}

var displaycode = document.getElementById('codeDisplay');

function generateCode() {

    displaycode.textContent = `code is ${otpGenerator(4)}`;
}
var btn = document.getElementById('generateButton');
btn.addEventListener("click", generateCode)