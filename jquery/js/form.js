$(document).ready(function () {
    console.log("Form örneği yüklendi.");
});

$(".btn").click(function () {
    if (!isNaN($("#ePosta").val()) || !isNaN($("#sifre").val())) {
        if (!isNaN($("#ePosta").val())) {
            console.log("Eposta adresi girilmemiş!");
        }
        if (!isNaN($("#sifre").val())) {
            console.log("Şifre girilmemiş!");
        }
    } else {
        $("#ep").remove();
        $("#sf").remove();
        $("#sf2").remove();

        if ($("#ePosta").val() !== "root@rooter.com") {
            $("#ePosta").parent().removeClass("has-success");
            $("#ePosta").parent().addClass("has-error");
            $("#ePosta").after("<span class='help-block' id='ep'>E-posta adresiniz yanlış!</span>");
        } else {
            $("#ePosta").parent().addClass("has-success");
            $("#ePosta").parent().removeClass("has-error");
            $("#ePosta").after("<span class='help-block' id='ep'>E-posta adresiniz doğru!</span>");
        }

        if ($("#sifre").val() !== "root") {
            $("#sifre").parent().removeClass("has-success");
            $("#sifre").parent().addClass("has-error");
            $("#sifre").after("<span class='help-block' id='sf'>Şifreniz yanlış!</span>");
        } else {
            $("#sifre").parent().addClass("has-success");
            $("#sifre").parent().removeClass("has-error");
            $("#sifre").after("<span class='help-block' id='sf'>Şifreniz doğru!</span>");
        }

        if ($("#sifre").val().length < 4) {
            $("#sifre").parent().removeClass("has-success");
            $("#sifre").parent().addClass("has-error");
            $("#sifre").after("<span class='help-block' id='sf2'>Şifreniz 3 karakterden büyük olmalı!</span>");
        }
    }
});