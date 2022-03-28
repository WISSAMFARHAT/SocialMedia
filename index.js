//sidebar
const menuItems =document.querySelectorAll('.menu-item');

//messages
const messageNotification=document.querySelector('#messages-notifications');
const messages=document.querySelector('.messages');
const message=document.querySelectorAll('.message');
const messagesearch=document.querySelector("#message-search");


// theme
const theme=document.querySelector('#theme');
const thememodel=document.querySelector('.customize-theme');
const fontsize=document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span');

const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');


//remove active to menu item
const changeActiveItem=()=>{
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        
        if(item.id !='notifications')
        {
            document.querySelector('.notification-popup').style.display='none';
            
        }else
        {
            
            document.querySelector('.notification-popup').style.display='block';
            document.querySelector('#notifications .notification-count').style.display='none'
            
        }
    })
})


//----------------------------- Meesages ---------------------------------------------
messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display='none'
    setTimeout(() => {
        messages.style.boxShadow='none';
    },2000);
})


//search chat
messagesearch.addEventListener('keyup',()=>{
    
  const val = messagesearch.value.toLowerCase();
  
  message.forEach(chat=>{
    
      let name =chat.querySelector('h5').textContent.toLowerCase();
     
      if(name.indexOf(val)!=-1){
          chat.style.display='flex';
      }else
      {
        chat.style.display='none';
      }

  })  
})

//theme Customasization

theme.addEventListener('click',()=>{
    thememodel.style.display="grid";

})

//close model
thememodel.addEventListener('click',(e)=>{
    if(e.target.classList.contains('customize-theme')){
        thememodel.style.display="none"
    }
})

//remove claslist active from span font size
const removeSizeselector=()=>{
    fontsize.forEach(size=>{
        size.classList.remove('active');
    })
}
//font size
fontsize.forEach(size=>{
    let font;
    
    size.addEventListener("click",()=>{
        removeSizeselector();
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            
            font='10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2'))
        {
            font='13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }else if(size.classList.contains('font-size-3'))
        {
            font='16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }else if(size.classList.contains('font-size-4'))
        {
            font='19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }else if(size.classList.contains('font-size-5'))
        {
            font='19px';
            root.style.setProperty('--sticky-top-left','-12rem');
            root.style.setProperty('--sticky-top-right','-35rem');
        }
        document.querySelector('html').style.fontSize=font;
    })
    
    

})

const changeActivecolor=()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}

//color change
colorPalette.forEach(color=>{
    
    
    color.addEventListener('click',()=>{
        let primaryHue;
        changeActivecolor();
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }else if(color.classList.contains('color-2'))
        {
            primaryHue=52;   
        }else if(color.classList.contains('color-3'))
        {
            primaryHue=352;   
        }else if(color.classList.contains('color-4'))
        {
            primaryHue=152;   
        }else if(color.classList.contains('color-5'))
        {
            primaryHue=202;   
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);

    })
})

//theme background
let lightColor;
let whiteColor;
let darkColor;

const ChangeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightColor);
    root.style.setProperty('--dark-color-lightness',darkColor);
    root.style.setProperty('--white-color-lightness',whiteColor);
}

Bg2.addEventListener('click',()=>{
    darkColor='95%';
    whiteColor='20%';
    lightColor='15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    ChangeBG();
})

Bg3.addEventListener('click',()=>{
    darkColor='95%';
    whiteColor='10%';
    lightColor='0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    ChangeBG();
})


Bg1.addEventListener('click',()=>{
    darkColor='17%';
    whiteColor='100%';
    lightColor='95%';

    //add active class
    Bg1.classList.add('active');
    //remove active class
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    ChangeBG();
})