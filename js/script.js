
// PH Map Slider
function updateImage() {
    var slider = document.getElementById('slider');
    var image = document.getElementById('year-image');
    var year = slider.value;
    image.src = year + '.png';
}

$(document).ready(function() {
    $(".collection-step").click(function() {
        $(this).next(".step-infos").slideToggle();
    });
});