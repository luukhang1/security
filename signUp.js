function onSubmitSignUp(e){
    e.preventDefault()
    
    var inputUsername = document.forms["form"]["username"].value
    var inputPassword = document.forms["form"]["password"].value
    var inputMaKH = document.forms["form"]["maKH"].value
    var usernameValidate = document.getElementById("usernameValidate")
    var passwordValidate = document.getElementById("passwordValidate")
    var maValidate = document.getElementById("maValidate")

    if(inputUsername === ""){
        usernameValidate.innerHTML = "Không được để trống"
    } 
    if(inputPassword === ""){
        passwordValidate.innerHTML = "Không được để trống"
    }
    if(inputMaKH === ""){
       maValidate.innerHTML = "Không được để trống"
    }  
    if(inputPassword > 0 && inputPassword.length < 8){
        passwordValidate.innerHTML = "Mật khẩu tối thiểu 8 kí tự"
    } else {
        console.log("sign up")
    }
    
}