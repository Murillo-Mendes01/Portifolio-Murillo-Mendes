// const hamburguer = document.querySelector('.mobile-menu');
// const nav = document.querySelector('.nav-list');
// const exit = document.querySelector('.mobile-menu-exit');

// hamburguer.addEventListener('click' , function trocar(){
//     nav.classList.add('active')
//     hamburguer.style.display = 'none';
//     exit.style.display = 'block';
// }) 

// exit.addEventListener('click' , function trocar(){
//     nav.classList.remove('active')
//     hamburguer.style.display = 'block';
//     exit.style.display = 'none';
// }) 

class MobileNavbar{
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) =>{
          link.style.animation
          ? (link.style.animation = '')  
          : (link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    Init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }  
}

const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
);

mobileNavbar.Init();

    

