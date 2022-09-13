const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY>0);
});


$(document).ready(function() {
    $('.Nhan_info').hide();
});
$("#Pham_info").on("click", function(){
    $(".Pham_info").show();
    $(".Nhan_info").hide();
})
$("#Nhan_info").on("click", function(){
    $(".Pham_info").hide();
    $(".Nhan_info").show();})
