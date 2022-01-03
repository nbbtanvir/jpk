const theLinks = document.getElementsByClassName('linkShowHide')[0];
const btn = document.getElementsByClassName('mobileMenu')[0];
btn.addEventListener('click',()=>{
    theLinks.classList.toggle('active');
})