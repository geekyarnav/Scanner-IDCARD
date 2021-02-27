function generator()
{
var nameS = document.getElementById("name").value
var mobile = document.getElementById("mobile").value
var state = document.getElementById("state").value
var blood = document.getElementById("blood").value

document.getElementById("res_name").innerHTML= "Name :- " + nameS
document.getElementById("res_mob").innerHTML= "Mobile_No. :- " + mobile
document.getElementById("res_state").innerHTML= "State :- " + state
document.getElementById("res_blood").innerHTML= "Blood Group :- " + blood
}