var $templateDescription;
var $templatePython;
var $templateJava;

var $solutionPython;
var $solutionJava;

$(document).ready(() => {
  $templateDescription = $("#description-template").html();
  $templatePython = $("#python-skeleton").html();
  $templateJava = $("#java-skeleton").html();

  $solutionJava = $("#java-solution").html();
  $solutionPython = $("#python-solution").html();

  $("#content").html($templateDescription);
  $("#description").addClass("active");

  var page = $("#page").attr("page");
  $("#" + page).addClass("active");
});

$(document).on("click", "#description", () => {
  $("#content").html($templateDescription);
  $("button.active").removeClass("active");
  $("#description").addClass("active");
});

$(document).on("click", "#python", () => {
  $("#content").html($templatePython);
  $("button.active").removeClass("active");
  $("#python").addClass("active");
});

$(document).on("click", "#java", () => {
  $("#content").html($templateJava);
  $("button.active").removeClass("active");
  $("#java").addClass("active");
});

$(document).on("click", "#java-sol", () => {
  $("#content").html($solutionJava);
  $(".active").removeClass("active");
  $("#java-sol").addClass("active");
});

$(document).on("click", "#python-sol", () => {
  $("#content").html($solutionPython);
  $(".active").removeClass("active");
  $("#python-sol").addClass("active");
});