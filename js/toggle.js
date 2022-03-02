$('.toggle-btn').click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).siblings('.toggle_content_box').slideUp(400);
    } else {   
      $('.toggle_content_box').slideUp(400);
      $('.toggle-btn').removeClass('active');
      $(this).addClass('active');
      $(this).siblings('.toggle_content_box').slideDown(400); 
    }  
  });
  $(function(){
    $(function() {
      $('.part0_BTN_box a').click(function() {
        var href = $(this).attr("href");
        $('html, body').animate({
          scrollTop: $(href).offset().top
        }, 500);
        return false;
      });
    });
  });
  // ----popup----
  $(".popclose").click(function() {
    $('.popup').fadeOut(200);
});
$(".left_BTN5").click(function() {
  $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
// -------burger----
const clickx= document.getElementById('pencet');

clickx.addEventListener('click', function(){
  clickx.classList.toggle('Diam');
});

$(".burger").click(function() {
  if ($(".leftbar").hasClass('leftbar_active')){
    $(".leftbar").removeClass("leftbar_active");
  }else{
  $(".leftbar").addClass("leftbar_active");}
});