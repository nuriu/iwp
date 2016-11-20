$(document).ready(function () {
    console.log("Vize Örnek Soruları Yüklendi.");

    $("#a1").attr("href", "http://xyz.com");
    $("#a1").attr("title", "xyz");
});

$("#btnTest1").click(function () {
    $("img").slideToggle(3000);
});

$("#btnTest2").click(function () {
    $("#div2").html($("#div1").html());
});