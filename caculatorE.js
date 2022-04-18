
function onClickCalc(){
    var date1 = document.getElementById("date1").innerHTML.toString
    var date2 = document.getElementById("date2").innerHTML
    var numElectric = document.getElementById("numElec").innerHTML
    var numH = document.getElementById("numH").innerHTML
    if(date1 === "" || date2 === "" || numElectric === "" || numH === ""){
        alert("Hãy nhập đầy đủ các thông số")
    }
}