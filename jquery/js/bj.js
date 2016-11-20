$(document).ready(function () {
    console.log("Basit jQuery yüklendi.");
});

// Basit jQuery
$("#temizle").click(function () {
    $("h1").hide(2000);
    $("p").hide(1500);
    $(this).hide();
});
