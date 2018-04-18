$(document).ready(function(){
  if ($(window).width() < 768) {
    $(".nav_tab").click(function(){
      $(this).find("div.dropdown-content").toggle(500);
      $(this).find(".dropbtn span:first-child").toggleClass('glyphicon-chevron-down');
      $(this).find(".dropbtn span:first-child").toggleClass('glyphicon-chevron-up');
    });
  }
});
