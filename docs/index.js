document.addEventListener( 'DOMContentLoaded', function(){
FadeIn = (e) =>{
    e.classList.add('transitionCustom');   
    setTimeout(function(){
        e.style.display = 'none';
        all.style.cursor = 'auto';
    } , 580); 
    setTimeout(function(){
        e.style.display = 'flex';
        e.classList.remove('mainMenu-active');
    } , 580); 
}
FadeInDesc = (e) =>{
    setTimeout(function(){
        e.style.display = 'block';
        } , 100);
    
        e.style.opacity = '1';
}
FadeOutDesc = (e) =>{
   
        e.style.opacity = '0';
    setTimeout(function(){
        e.style.display = 'none';
    }, 100)
}
DeletePX = (e) =>{
    var arr = e.split('');
    for (let i = arr.length - 3; i < arr.length; i++){
        arr.pop();
    }
    arr = arr.join('');
    arr = +arr;
    arr = parseInt(arr);
    return arr;
}
Line = (mLine , Li , Cor) =>{
    let width = getComputedStyle(Li);
    let setting = width.getPropertyValue('width');
    let a = DeletePX(setting);
    mLine.style.width = a + 'px';
    mLine.style.left = Cor + 'px';
}
ClickFadeIn = (section , line) =>{
    section.style.opacity = '1';
    section.style.display = 'block';
    line.style.transition = 'none';
    setTimeout(function(){
        line.style.transition = 'all 0.4s ease-in-out';
    } , 200);
}


    var mainMenu = document.querySelector('.mainMenu');
    var cursor = document.querySelector('#pointer');
    var all = document.querySelector(`*`);
    var body = document.querySelector(`body`);
    var aboutPage = document.querySelector(`#about`);   
    var overflow = document.querySelector('#overflow');
    var menu = document.querySelector('.icon');
    var moto = document.querySelector(`.wrapper`);
    var landing = document.querySelector(`.landing`)

    /* Second menu */
    var clickCheck;
    var menuLine = document.querySelector('#menu-line')
    var secondMenu = document.querySelectorAll('#secondMenu ul li');
    var secondMenuHome = secondMenu[0];
    var secondMenuAbout = secondMenu[1];
    var secondMenuWorks = secondMenu[2];
    var secondMenuContact = secondMenu[3];
    
/* Second Menu Click Events */

var aboutWrapper = document.querySelector('#about-wrapper');
var WorksWrapper = document.querySelector('#myWorks-wrapper');
var ContactWrapper = document.querySelector(`#Contact-wrapper`);

setTimeout(function(){
moto.style.opacity = `1`;

} , 1000)
setTimeout(function(){
menu.style.opacity = `1`;
} , 1500)

/* MenuLine */

var AboutCor = secondMenuAbout.getBoundingClientRect();
var ACor = AboutCor.left;

var HomeCor = secondMenuHome.getBoundingClientRect();
var HCor = HomeCor.left;

var WorksCor = secondMenuWorks.getBoundingClientRect();
var WCor = WorksCor.left;

var ContactCor = secondMenuContact.getBoundingClientRect();
var CCor = ContactCor.left;



secondMenuHome.addEventListener('click' , function(){
    if (window.matchMedia("(max-width: 500px)").matches) {
        body.style.overflowY = `hidden`;
      }
    mainMenu.style.opacity = `1`;
    aboutPage.style.opacity = '0';
    menu.style.opacity = '1';
    all.style.cursor = 'auto !important';
    setTimeout(function(){
        aboutPage.style.zIndex ='1';
    } , 200); 
    
    WorksWrapper.style.opacity = '0';
    aboutWrapper.style.opacity = '0';
    ContactWrapper.style.opacity = '0';
    setTimeout(function(){
        ContactWrapper.style.display = 'none';
    } , 300);
    setTimeout(function(){
        aboutWrapper.style.display = 'none';
    } , 300);
    setTimeout(function(){
        WorksWrapper.style.display = 'none';
    } , 300);     
})
secondMenuWorks.addEventListener('click' , function(){ 
    clickCheck = 2;
    if (window.matchMedia("(max-width: 500px)").matches) {
        body.style.overflowY = `scroll`;
      }  
    aboutWrapper.style.opacity = '0';
    setTimeout(function(){
        aboutWrapper.style.display = 'none';
    } , 300);
    ContactWrapper.style.opacity = '0';
    setTimeout(function(){
        ContactWrapper.style.display = 'none';
    } , 300);
    setTimeout(function(){
        WorksWrapper.style.display = 'block';
    } , 300);   
    setTimeout(function(){
        WorksWrapper.style.opacity = '1';
    } , 600);    
    Line(menuLine , secondMenuAWorks , WCor);  

})
secondMenuAbout.addEventListener('click' , function(){ 
    clickCheck = 1;
    if (window.matchMedia("(max-width: 800px)").matches) {
        body.style.overflowY = `scroll`;
      } 
    WorksWrapper.style.opacity = '0';
    setTimeout(function(){
        WorksWrapper.style.display = 'none';
    } , 300);
    ContactWrapper.style.opacity = '0';
    setTimeout(function(){
        ContactWrapper.style.display = 'none';
    } , 300);
    setTimeout(function(){
        aboutWrapper.style.display = 'block';
    } , 300);   
    setTimeout(function(){
        aboutWrapper.style.opacity = '1';
    } , 600); 
    Line(menuLine , secondMenuAbout , ACor);  
})
secondMenuContact.addEventListener('click' , function(){   
    clickCheck = 3;
    if (window.matchMedia("(max-width: 500px)").matches) {
        body.style.overflowY = `hidden`;
      }
    WorksWrapper.style.opacity = '0';
    setTimeout(function(){
        WorksWrapper.style.display = 'none';
    } , 300);
    aboutWrapper.style.opacity = '0';
    setTimeout(function(){
        aboutWrapper.style.display = 'none';
    } , 300);
    setTimeout(function(){
        ContactWrapper.style.display = 'block';
    } , 300);   
    setTimeout(function(){
        ContactWrapper.style.opacity = '1';
    } , 600); 
    Line(menuLine , secondMenuContact , CCor);  
})



secondMenuLeave = (counter , line , liA , liW , liC , CorA , CorB , CorC) =>{
    if(counter == 1){
        Line(line , liA , CorA);
    }
    if(clickCheck == 2){
        Line(line , liW , CorB);
    }
    if (clickCheck == 3){
        Line(line , liC , CorC);
    }
}    
    
    secondMenuHome.addEventListener('mouseover' , function(e){
        Line(menuLine , secondMenuHome , HCor);
    })
    secondMenuHome.addEventListener('mouseleave' , function(e){
        secondMenuLeave(clickCheck , menuLine , secondMenuAbout , secondMenuWorks , secondMenuContact , ACor , WCor , CCor);

    })
    secondMenuAbout.addEventListener('mouseover' , function(e){
        Line(menuLine , secondMenuAbout , ACor);
    })
    secondMenuAbout.addEventListener('mouseleave' , function(e){
        secondMenuLeave(clickCheck , menuLine , secondMenuAbout , secondMenuWorks , secondMenuContact , ACor , WCor , CCor);
    })
    secondMenuWorks.addEventListener('mouseover' , function(e){
        Line(menuLine , secondMenuWorks , WCor);
    })
    secondMenuWorks.addEventListener('mouseleave' , function(e){
        secondMenuLeave(clickCheck , menuLine , secondMenuAbout , secondMenuWorks , secondMenuContact , ACor , WCor , CCor);
    })
    secondMenuContact.addEventListener('mouseover' , function(e){
        Line(menuLine , secondMenuContact , CCor);
    })
    secondMenuContact.addEventListener('mouseleave' , function(e){
    secondMenuLeave(clickCheck , menuLine , secondMenuAbout , secondMenuWorks , secondMenuContact , ACor , WCor , CCor);
    })



var wrapper = document.querySelector('.wrapper');
var particles = document.querySelector('#particles-js');


    
mainMenu.addEventListener('mousemove' , function(e){
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px'; 
    setTimeout(function(){
        cursor.style.opacity = `1`;
    } , 200);
    
})
mainMenu.addEventListener('mouseleave' , function(e){
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    setTimeout(function(){
        cursor.style.opacity = `0`;
    } , 200);
   
})
mainMenu.addEventListener('mousedown' , function(){
    cursor.style.transition = 'all 0.3s linear';
    cursor.style.width = '120px';
    cursor.style.height = '120px';
})
mainMenu.addEventListener('mouseup' , function(){
    cursor.style.width = '100px';
    cursor.style.height = '100px';
})




var menuArr = document.querySelectorAll('.mainMenuLi span');
var description = document.querySelectorAll(`.homeDescription`);
for (let i = 0; i < menuArr.length; i++) {
    menuArr[i].addEventListener('click' , function(){
        
        (function() {
                         let j = -1;     
                    return function() {     
                        if ( ++j < menuArr.length ) {   
                            menuArr[j].style.paddingLeft = '50px';   
                            menuArr[j].style.opacity = '0';     
                            setTimeout( arguments.callee, 100 );    
                        }
                    }();    
                })();  
                setTimeout(function(){ 
                    mainMenu.style.opacity = `0`;              
                } , 1000)  
                description.forEach(e => {
                    e.style.opacity = `0`;
                });                   
    })
}

menuArr[1].addEventListener('click' , function(){  
    if (window.matchMedia("(max-width: 800px)").matches) {
        body.style.overflowY = `scroll`;
      }
    menu.style.zIndex = '9';
    clickCheck = 1;
    mainMenu.classList.add('transitionCustom');   
    aboutPage.style.opacity = '1';
    setTimeout(function(){      
        all.style.cursor = 'auto';
    } , 800); 
    setTimeout(function(){
        mainMenu.classList.remove('mainMenu-active');
    } , 580);
   aboutPage.style.zIndex = '9';
   Line(menuLine , secondMenuAbout , ACor);
   ClickFadeIn(aboutWrapper , menuLine);
})
menuArr[1].addEventListener(`mouseover` , function(){
    FadeOutDesc(description[0]);
    FadeInDesc(description[2]);
})
menuArr[1].addEventListener(`mouseout` , function(){
    FadeOutDesc(description[2]);
})

menuArr[0].addEventListener('click' , function(){
    mainMenu.style.opacity = `1`;
    if (window.matchMedia("(max-width: 500px)").matches) {
        body.style.overflowY = `hidden`;
      }
    menu.style.opacity = '1';  
    mainMenu.classList.add('transitionCustom'); 
      
    setTimeout(function(){      
        all.style.cursor = 'auto';
    } , 750); 
    setTimeout(function(){
        mainMenu.classList.remove('mainMenu-active');
    } , 580);
})
menuArr[0].addEventListener(`mouseover` , function(){
    FadeOutDesc(description[0]);
    FadeInDesc(description[1]);
})
menuArr[0].addEventListener(`mouseout` , function(){
    FadeOutDesc(description[1]);
})


menuArr[2].addEventListener('click' , function(){
    if (window.matchMedia("(max-width: 500px)").matches) {
        body.style.overflowY = `scroll`;
      }
    menu.style.zIndex = '9';
    clickCheck = 2;
    mainMenu.classList.add('transitionCustom');   
    aboutPage.style.opacity = '1';
    setTimeout(function(){      
        all.style.cursor = 'auto';
    } , 800); 
    setTimeout(function(){
        mainMenu.classList.remove('mainMenu-active');
    } , 580);
   aboutPage.style.zIndex = '9';
   ClickFadeIn(WorksWrapper , menuLine);
   Line(menuLine , secondMenuWorks , WCor);
})
menuArr[2].addEventListener(`mouseover` , function(){
    FadeOutDesc(description[0]);
    FadeInDesc(description[3]);
})
menuArr[2].addEventListener(`mouseout` , function(){
    FadeOutDesc(description[3]);
})

menuArr[3].addEventListener('click' , function(){
    if (window.matchMedia("(max-width: 500px)").matches) {
        body.style.overflowY = `hidden`;
      }
    menu.style.zIndex = '9';
    clickCheck = 3;
    mainMenu.classList.add('transitionCustom');   
    aboutPage.style.opacity = '1';
    setTimeout(function(){      
        all.style.cursor = 'auto';
    } , 800); 
    setTimeout(function(){
        mainMenu.classList.remove('mainMenu-active');
    } , 580);
   aboutPage.style.zIndex = '9';
   ClickFadeIn(ContactWrapper , menuLine);
   Line(menuLine , secondMenuContact , CCor);
})
menuArr[3].addEventListener(`mouseover` , function(){
    FadeOutDesc(description[0]);
    FadeInDesc(description[4]);
})
menuArr[3].addEventListener(`mouseout` , function(){
    FadeOutDesc(description[4]);
})




    menu.addEventListener('click' , function(){
        landing.style.transition = `all 0.5s ease-in-out`;
        wrapper.style.transition = `all 0.5s ease-in-out`;
            landing.style.top = `-175px`;     
            menu.classList.add('active');
            menu.style.opacity = '0';
            menu.style.zIndex = '100';
            all.style.cursor = 'none';
            mainMenu.classList.add('mainMenu-active');
            mainMenu.classList.remove('transitionCustom');
            setTimeout(function(){
                menu.classList.remove('active');
            }, 1000)  
            for (let i = 0; i < menuArr.length; i++) {
                menuArr[i].style.opacity = '1';
                menuArr[i].style.paddingLeft = '0';
            } 
            setTimeout(function(){
                landing.style.transition = `none`;
                wrapper.style.transition = `none`; 
                landing.style.top = `0`; 
            } , 1000);
    })
    menu.addEventListener("mouseover" , function(){
        particles.style.opacity = "1";
        overflow.style.opacity = "0.7";    
        wrapper.style.color = "#fff";         
    })
    menu.addEventListener("mouseout" , function(){
        particles.style.opacity = "0";
        overflow.style.opacity = "0.3";     
        wrapper.style.color = "#000";     
    })

})


