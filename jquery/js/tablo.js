$(document).ready(function() {
    console.log("Tablo örneği yüklendi.");
    
    $("tr").click(function() {
        $(this).css("background-color", "blue");
        $(this).fadeOut(3000, function() {
            $(this).remove();
            $("table").append("<tr><td>a</td><td>b</td></tr>");
        });
    });
});