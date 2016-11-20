$(document).ready(function () {
    console.log("Hesap makinesi yüklendi.");
});

$("#topla").click(function () {
    if (!isNaN($("#sayi1").val()) && !isNaN($("#sayi2").val())) {
        var sonuc = parseFloat($("#sayi1").val());
        sonuc += parseFloat($("#sayi2").val())
        $("#sonuc").text("Sonuç: " + sonuc);
    } else {
        alert("Sayılar boş olamaz.");
    }
});

$("#cikar").click(function () {
    if (!isNaN($("#sayi1").val()) && !isNaN($("#sayi2").val())) {
        var sonuc = parseFloat($("#sayi1").val());
        sonuc -= parseFloat($("#sayi2").val())
        $("#sonuc").text("Sonuç: " + sonuc);
    } else {
        alert("Sayılar boş olamaz.");
    }
});

$("#carp").click(function () {
    if (!isNaN($("#sayi1").val()) && !isNaN($("#sayi2").val())) {
        var sonuc = parseFloat($("#sayi1").val());
        sonuc *= parseFloat($("#sayi2").val())
        $("#sonuc").text("Sonuç: " + sonuc);
    } else {
        alert("Sayılar boş olamaz.");
    }
});

$("#bol").click(function () {
    if (!isNaN($("#sayi1").val()) && !isNaN($("#sayi2").val())) {
        var sonuc = parseFloat($("#sayi1").val());
        sonuc /= parseFloat($("#sayi2").val())
        $("#sonuc").text("Sonuç: " + sonuc);
    } else {
        alert("Sayılar boş olamaz.");
    }
});