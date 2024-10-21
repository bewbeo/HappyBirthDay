$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html("Make a wish... and blow out the candle").delay(750).fadeIn(300);
        $("#candle").animate(
        txt.hide().html("i wish you happy birthday").delay(750).fadeIn(300);
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});

