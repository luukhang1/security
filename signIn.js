function onSubmitSignIn(e){
    e.preventDefault()
    
    var inputUsername = document.forms["form"]["username"].value
    var inputPassword = document.forms["form"]["password"].value
    var usernameValidate = document.getElementById("usernameValidate")
    var passwordValidate = document.getElementById("passwordValidate")

    if(inputUsername === ""){
        usernameValidate.innerHTML = "Không được để trống"
    } 
    if(inputPassword === ""){
        passwordValidate.innerHTML = "Không được để trống"
    } 
    if( inputPassword.length < 8){
        passwordValidate.innerHTML = "Mật khẩu tối thiểu 8 kí tự"
    } else {
        location.replace("payInfo.html")
    }
    
}