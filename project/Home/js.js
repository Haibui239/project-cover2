function _class(name){
    return document.getElementsByClassName(name);
  }
   
  let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
   
  for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
      _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
      tabPanes[i].classList.add("active");
      
      _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
      
      _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
      _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
      
    });
  }

window.addEventListener('scroll',reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for(var i = 0;i < reveals.length ; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}




$(".btn-showmore").click(function(){
    $(this).toggleClass("active");
   $(".other .boxs").toggleClass("active");
   
   if($(".btn-showmore").hasClass("active")){
     $("#showMore").text("Show Less");
   }
   else{
     $("#showMore").text("Show More");
   }
 });