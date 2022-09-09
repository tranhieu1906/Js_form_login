function Btn(){
    if (submitName() === true && submitpass() === true&&confirmPass() === true && confirmtel() === true){
        alert("Bạn đã đăng kí thành công")
    }
    submitName()
    submitpass()
    confirmPass()
    confirmtel()
    confirmEmail()
    submitLocation()
}
function submitName(){
    let name = document.getElementById("name").value
    if (name != ""){
        document.getElementById("ntName").innerHTML=""
    }else if (name == ""){
        document.getElementById("ntName").innerHTML="chưa nhập tên "
    }else {
        return true
    }

}
function submitpass(){
    let pass = document.getElementById("password").value
    if (pass == ""){
        document.getElementById("ntPass").innerHTML="chưa nhập password "
    }else if (pass.length < 6 || pass.length > 20){
        document.getElementById("ntPass").innerHTML="bạn cần nhập trên 6 ký tự và dưới 20 ký tự "
    }else {
        return true
    }
}
function confirmPass(){
    let pass = document.getElementById("password").value
    let confirmPass = document.getElementById("confirmPassword").value;
    if (confirmPass != pass){
        document.getElementById("ntPassword").innerHTML="mật khẩu nhập lại không đúng"
    }else {
        return true
    }
}
function confirmtel(){
    let tel = document.getElementById("tel").value
    if (tel.length !== 10 && tel.length !== 11){
        document.getElementById("ntTel").innerHTML="Nhập lại số điện thoại đi "
    }else {
        return true
    }
}
function confirmEmail (){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let email = document.getElementById("email").value
    if (email.match(re)){

    }else if (email == ""){
        document.getElementById("ntEmail").innerHTML="chưa nhập email "
    }
}
function submitLocation(){
    let location = document.getElementById("location").value
    if (location == ""){
        document.getElementById("ntLocation").innerHTML="chưa nhập địa chỉ "
    }else {
        return true
    }
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);



// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;
// let confirmPassword = document.getElementById("confirmPassword").value;
// let tel = document.getElementById("tel").value;
// let position = document.getElementById("location").value;