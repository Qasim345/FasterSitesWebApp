
setTimeout(()=> {
  $(".loader").fadeOut(300);
},3000);

// toggle navbar
$(".nav-btn").click(()=> {
  $(".sidebar").toggleClass("act");
  $(".back").toggleClass("dr");
});
// close navbar
$("#close-nav").click(()=> {
  $(".sidebar").removeClass("act");
  $(".back").removeClass("dr");
});
// outside clicking
document.onclick = (e)=> {
  if (e.target.id !== 'sidebar' && e.target.id !== 'nav-btn') {
    $(".sidebar").removeClass("act");
    $(".back").removeClass("dr");
  }
}
// filtering
$("#filter").on("keyup",function(){
  var value = $(this).val().toLowerCase();
  $(".container .bar .box").filter(function(){
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});

// preview page
var view = document.querySelector(".iframe");
$(".google").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.google.com";
});
$(".youtube").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.youtube.com";
});
$(".linkedin").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.linkedin.com";
});
$(".facebook").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.facebook.com";
});
$(".yahoo").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.yahoo.com";
});
$(".instagram").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.instagram.com";
});
$(".twitter").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.twitter.com";
});
$(".google-plus").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.google-plus.com";
});
$(".sololearn").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.sololearn.com";
});
$(".amazon").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.amazon.com";
});
$(".dribbble").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.dribbble.com";
});
$(".dropbox").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.dropbox.com";
});
$(".pintrest").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.pintrest.com";
});
$(".gmail").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.google.com/gmail";
});
$(".telegram").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://web.telegram.org";
});
$(".blogger").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.blogger.com";
});
$(".snapchat").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://story.snapchat.com";
});
$(".tiktok").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.titkok.com/en/trending";
});
$(".ebay").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.ebay.com";
});
$(".tumblr").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.tumblr.com";
});
$(".wikipedia").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.wikipedia.org";
});
$(".wordpress").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.wordpress.com";
});
$(".aliexpress").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.aliexpress.com";
});
$(".soundcloud").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.soundcloud.com";
});
$(".netflix").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.netflix.com";
});
$(".office").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.office.com";
});
$(".yandex").click(()=> {
  $(".preview").toggleClass("view");
  view.src = "https://www.yandex.com";
});

$("#close-view").click(()=> {
  $(".preview").removeClass("view");
});

// about 
$("#about").click(()=>{
  $(".about").toggleClass("up");
  $(".dark").toggleClass("dr");
});
$(".close").click(()=>{
  $(".about").removeClass("up");
  $(".dark").removeClass("dr");
});
// change mode
$(".mode-btn").click(()=> {
  $(".sidebar").toggleClass("dark");
  $(".nav").toggleClass("dark");
  $("body").toggleClass("dark");
  $(".preview").toggleClass("dark");
  $(".about").toggleClass("dark");
});