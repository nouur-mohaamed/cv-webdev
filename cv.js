let sliderContainer = document.querySelector('.slider')
let backbtn = document.querySelector('.back-btn')
let nextbtn = document.querySelector('.next-btn')
function getRem(){
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
}
let media=window.matchMedia("(max-width: 390px)");
let media2=window.matchMedia("(max-width: 495px)");
 let homebarlinks=document.querySelector('.home-bar-links');
 
function dropdownmenu(){
    if(media2.matches){
        homebarlinks.innerHTML='<img src="menu.png" class="js-dropdown logo-dropdown">';
        console.log( homebarlinks.innerHTML)
        let dropdownbutton = document.querySelector('.js-dropdown')
        dropdownbutton.addEventListener('click',viewdropdown);

    }
}

function viewdropdown(){
homebarlinks.innerHTML=`<div class="home-bar-links-dropdown">
<div class="xbutton"> <img src="cross-button.png" class="js-xbutton"> </div>
<a href="#about" class="bar-links-dropdown">About</a>
<a href="#skills" class="bar-links-dropdown">Skills</a>
<a href="#projects" class="bar-links-dropdown">Projects</a>
<a href="#contact" class="bar-links-dropdown">Contact</a>
</div> `
let xbutton = document.querySelector('.js-xbutton');
xbutton.addEventListener('click',hidedropdown);
}


function hidedropdown(){
   dropdownmenu();
}

 console.log(homebarlinks)
function checkmedia(){
    if(media.matches){
backbtn.addEventListener('click',()=>{
    sliderContainer.style.scrollBehavior ="smooth";
    sliderContainer.scrollLeft -= 35*getRem();
})
nextbtn.addEventListener('click',()=>{
    sliderContainer.style.scrollBehavior ="smooth";
    sliderContainer.scrollLeft += 35*getRem();
})
    }
    else{
       backbtn.addEventListener('click',()=>{
    sliderContainer.style.scrollBehavior ="smooth";
    sliderContainer.scrollLeft -= 55*getRem();
})
nextbtn.addEventListener('click',()=>{
    sliderContainer.style.scrollBehavior ="smooth";
    sliderContainer.scrollLeft += 55*getRem();
}) 
    }
}
media.addEventListener('change',checkmedia);
media2.addEventListener('change',dropdownmenu);
checkmedia();
dropdownmenu();

let calcbtn = document.querySelector('.js-calcbtn')
calcbtn.addEventListener('click',()=>{
    location.href='https://drive.google.com/drive/folders/1K95ha3PYhsVGpKIfFV32Z3Hp8el4jCUQ'
}) 
let solarbtn = document.querySelector('.js-solarbtn')
solarbtn.addEventListener('click',()=>{
    location.href='https://drive.google.com/drive/folders/1eSrv6oYyYv9l_drg8tkvb1x_7gnlX_aZ'
})
let audiobtn = document.querySelector('.js-audiobtn')
audiobtn.addEventListener('click',()=>{
    location.href='https://drive.google.com/drive/folders/1OKoHVLDDqHRmqvnDc_3iQ6Y8-SFJJlbu'
})
let powersupplybtn = document.querySelector('.js-powersupplybtn')
powersupplybtn.addEventListener('click',()=>{
    location.href='https://drive.google.com/drive/folders/1OKoHVLDDqHRmqvnDc_3iQ6Y8-SFJJlbu'
})
let logicbtn = document.querySelector('.js-logicbtn')
logicbtn.addEventListener('click',()=>{
    location.href='https://drive.google.com/drive/folders/1JhC5LdCnGtDNlK2X3oKgEzwhWvTXwgtW'
})