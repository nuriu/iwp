$(document).ready(function () {
    console.log("Belge yüklendi.");

    $("#icerik").load("jquery/html/bj.html");
});

$("ul li").click(function () {
    $("li.active").removeClass("active");
    $(this).addClass("active");

    if (this.id.slice(0, 2) == "bs") {
        $("#icerik").load("bootstrap/" + this.id.slice(2, this.id.length) + ".html");
    } else {
        $("#icerik").load("jquery/html/" + this.id + ".html");
    }
});