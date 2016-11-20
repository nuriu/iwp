$(document).ready(function () {
    console.log("Belge yüklendi.");
    $("#icerik").load("jquery/html/bj.html");
});

// Menü
$("#hm").click(function () {
    $("li.active").removeClass("active");
    $("#hm").addClass("active");
    $("#icerik").load("jquery/html/hm.html");
});

$("#slider").click(function () {
    $("li.active").removeClass("active");
    $("#slider").addClass("active");
    $("#icerik").load("jquery/html/slider.html");
});

$("#bj").click(function () {
    $("li.active").removeClass("active");
    $("#bj").addClass("active");
    $("#icerik").load("jquery/html/bj.html");
});

$("#vizeOrnekSorular").click(function () {
    $("li.active").removeClass("active");
    $("#vizeOrnekSorular").addClass("active");
    $("#icerik").load("jquery/html/vos.html");
});

$("#tablo").click(function () {
    $("li.active").removeClass("active");
    $("#tablo").addClass("active");
    $("#icerik").load("jquery/html/tablo.html");
});

$("#bsTablolar").click(function () {
    $("li.active").removeClass("active");
    $("#bsTablolar").addClass("active");
    $("#icerik").load("bootstrap/tablolar.html");
});