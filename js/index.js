$(document).ready(function () {
    console.log("Belge yüklendi.");
    $("#icerik").load("html/bj.html");
});

// Menü
$("#hm").click(function () {
    $("li.active").removeClass("active");
    $("#hm").addClass("active");
    $("#icerik").load("html/hm.html");
});

$("#slider").click(function () {
    $("li.active").removeClass("active");
    $("#slider").addClass("active");
    $("#icerik").load("html/slider.html");
});

$("#bj").click(function () {
    $("li.active").removeClass("active");
    $("#bj").addClass("active");
    $("#icerik").load("html/bj.html");
});

$("#vizeOrnekSorular").click(function(){
    $("li.active").removeClass("active");
    $("#vizeOrnekSorular").addClass("active");
    $("#icerik").load("html/vos.html");
});