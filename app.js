

function sidebar() {
    let sideBar = document.querySelector('.sidebar');
    let burger = document.querySelector('.toggle');
    let interface = document.querySelector('.interface')
    let avatar = document.querySelector('.avatar');
    let menuText = document.querySelectorAll('.sidebar li span');
    var sideBarWidth = parseInt(window.getComputedStyle(sideBar).width);
    //burger.style.marginLeft = `${sideBarWidth - 57.26}px`
    console.log(burger.style.marginLeft); 
    burger.onclick = ()=>{
        sideBar.classList.toggle('sidebarActive');
        burger.classList.toggle('togglePlay');
        avatar.classList.toggle('avatarD');
        sideBar.classList.toggle('list');
        interface.classList.toggle('uismall');
        
    }
}
sidebar();