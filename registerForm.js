
function onSubmitForm(e){
    e.preventDefault()
    

    var inputName = document.forms["form"]["name"].value
    var validateName = document.getElementById("nameVali")
    var nameRegex = /^[A-Za-z ]+$/;
    if(inputName === ""){
        validateName.innerHTML = "Không được để trống *"
    }
    else if(nameRegex.test(inputName)){
       console.log("name")
    }else{
        validateName.innerHTML = "Sai định dạng"
    }


    var inputEmail = document.forms["form"]["email"].value
    var validateEmail = document.getElementById("emailVali")
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(inputEmail === ""){
        validateEmail.innerHTML = "Không được để trống *"
    }
    else if(emailRegex.test(inputEmail)){
       console.log("email")
    }else{
        validateEmail.innerHTML = "Sai định dạng"
    }

    var inputPhone = document.forms["form"]["phone"].value
    var validatePhone = document.getElementById("phoneVali")
    if(inputPhone === ""){
        validatePhone.innerHTML = "Không được để trống *"
    }
    else if(inputPhone.match(/\d/g).length === 10){
       console.log("phone")
    }else{
        validatePhone.innerHTML = "Sai định dạng"
    }
 

    var inputResidence = document.forms["form"]["residence"].value
    var validateResidence = document.getElementById("residenceVali")
    if(inputResidence === ""){
        validateResidence.innerHTML = "Không được để trống *"
    } else{
        console.log("residence")
    }

   
    var inputAddress = document.forms["form"]["address"].value
    var validateAddress = document.getElementById("addressVali")
    if(inputAddress === ""){
        validateAddress.innerHTML = "Không được để trống *"
    } else{
        console.log("address")
    }
 

    var inputCmnd = document.forms["form"]["cmnd"].value
    var validateCmnd = document.getElementById("cmndVali")
    if(inputCmnd === ""){
        validateCmnd.innerHTML = "Không được để trống *"
    }
    else if(inputCmnd.match(/\d/g).length === 12){
       console.log("cmnd")
    }else{
        validateCmnd.innerHTML = "Sai định dạng"
    }
 


    var inputDate = document.forms["form"]["date"].value
    var validateDate = document.getElementById("dateVali")
    if(inputDate === ""){
        validateDate.innerHTML = "Không được để trống *"
    } else{
        console.log("date")
    }


    var inputWhereA = document.forms["form"]["whereA"].value
    var validateWhereA = document.getElementById("whereAVali")
    if(inputWhereA === ""){
        validateWhereA.innerHTML = "Không được để trống *"
    } else{
        console.log("awhere A")
    }
}

