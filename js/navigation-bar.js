/*
* @Created by: Abhishek Ashinsa
* @Date: 19/07/2022
* @Project: E-Tech Computers
* */

var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }else {
        navbar.classList.remove("sticky");
    }
}