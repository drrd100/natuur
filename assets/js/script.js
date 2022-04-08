window.onload = function(){
  const headerScroll = () =>{
    const scrollTop = document.documentElement.scrollTop;
    const header = document.getElementById('header')
    
    if(scrollTop > 100){
        header.classList.add('scroll-down');
    }else{
        header.classList.remove('scroll-down');
    }
}
document.addEventListener('scroll' , headerScroll);

let visualSwiper = new Swiper(".main-visual-container", {
    loop:true,
    speed: 1500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
      },
      autoplay: {

        delay: 4500,
        disableOnInteraction: false,
      },  
    pagination: {
      el: ".visual-pagination",
      clickable: true,
    },
});

let newsSwiper = new Swiper(".news-slide", {
    loop:true,
    speed: 500,
    slidesPerView: 1.2,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },  
      breakpoints: {
        581: {
          slidesPerView: 2.2,
          spaceBetween: 20
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }
  });

    const aside = document.getElementById('aside');
    const asideBtn = document.getElementsByClassName('aside-btn');
    const closeBtn = document.getElementsByClassName('aside-closeBtn')
    const deemed = document.getElementsByClassName('deemed');
  
  asideBtn[0].addEventListener('click', () => {
    console.log("click");
    aside.classList.add('aside-active');
    document.body.classList.add('scroll-stop');
    deemed[0].style.display = "block";
  });

  closeBtn[0].addEventListener('click', () => {
    console.log("click");
    aside.classList.remove('aside-active');
    document.body.classList.remove('scroll-stop')
    deemed[0].style.display = "none";
  });

  const asideMenu = () => {
    let listTitle = document.getElementsByClassName('list-title');
    let i;
  
    for (i = 0; i < listTitle.length; i++) {
      listTitle[i].addEventListener("click", (e) => {
        e.target.classList.toggle('aside-checked');
        let listItem = e.target.nextElementSibling;
        if (listItem.style.maxHeight) {
          listItem.style.maxHeight = null;
        } else {
          listItem.style.maxHeight = listItem.scrollHeight + "px";
        }
      });
    }
  }
  asideMenu()

  const handleTab = (e, contentIdx) => {
    let i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("story-item");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("story-active")
    }
  
    tablink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].classList.remove("story-active")
    }
  
    const cur = document.getElementById(contentIdx)
    cur.classList.add('story-active');
    e.currentTarget.classList.add("story-active");
  }


}
