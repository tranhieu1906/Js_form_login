function Btn(){
    submitName()
    submitpass()
    confirmPass()
    confirmtel()
    confirmEmail()

}
function submitName(){
    let name = document.getElementById("name").value
    if (name == ""){
        document.getElementById("ntName").innerHTML="chưa nhập tên kìa"
    }
}
function submitpass(){
    let pass = document.getElementById("password").value
    if (pass == ""){
        document.getElementById("ntPass").innerHTML="chưa nhập pass kìa"
    }else if (pass.length < 6 || pass.length > 20){
        document.getElementById("ntPass").innerHTML="bạn cần nhập trên 6 ký tự và dưới 20 ký tự "
    }
}
function confirmPass(){
    let pass = document.getElementById("password").value
    let confirmPass = document.getElementById("confirmPassword").value;
    if (confirmPass != pass){
        document.getElementById("ntPassword").innerHTML="mật khẩu nhập lại không đúng"
    }
}
function confirmtel(){
    let tel = document.getElementById("tel").value

    if(tel.length === 10 || tel.length === 11 ) {
        return document.getElementById("ntTel").innerHTML = ""
    } else {
        document.getElementById("ntTel").innerHTML="Nhập lại số điện thoại đi "
    }


}
function confirmEmail (){
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let email = document.getElementById("email").value
    if (email.match(re)){

    }else if (email == ""){
        document.getElementById("ntEmail").innerHTML="chưa nhập email kìa"
    }else{
        document.getElementById("ntEmail").innerHTML="chưa nhập đúng định dạng email"
    }
}







// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;
// let confirmPassword = document.getElementById("confirmPassword").value;
// let tel = document.getElementById("tel").value;
// let position = document.getElementById("location").value;