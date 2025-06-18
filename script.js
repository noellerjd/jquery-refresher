console.log("hello");

$(document).ready(function () {
  // ?basic selectors
  //   $("*").css("border", "4px solid red");
  // ?basic animations
  $(".box:first").hide(500).delay(300).show(800);
  $($(".box")[1]).slideUp(500).slideDown(800);
  $($(".box")[2]).fadeOut(500).fadeIn(800);
  $($(".box")[3]).animate({ bottom: "200px", left: "200px" }, 800);
  // ?index filters
  //   $("p:eq(2)").css("border", "4px solid red");
  //   $("p:first(2)").css("border", "4px solid red");
  //   $("p:last(2)").css("border", "4px solid red");
  //   $("p:lt(2)").css("border", "4px solid red");
  // ?relationship filters
  //   $("h2:has(span)").css("border", "4px solid red");
  //   $(".box:empty").css("border", "4px solid red");
  // ?attribute filters
  //   $('a[href$=".co.uk"').css("border", "4px solid red");
});
