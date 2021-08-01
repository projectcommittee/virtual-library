let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
searchBtn.classList.remove('fa-times');
searchBar.classList.remove('active');
menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
let counter =1;
setInterval(function(){
    document.getElementById('img-' + counter).checked =true;
    counter++;
    if(counter>3){
        counter=1;
    }
}, 5000);
