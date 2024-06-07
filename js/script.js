
// PH Map Slider
function updateMapImage() {
    var slider = document.getElementById('year-slider');
    var image = document.getElementById('year-image');
    var year = slider.value;
    image.src = 'RegionsMap/' + year + '.png';
}

let regions_title = ['National Capital Region (NCR)', 'Cordillera Administrative Region (CAR)', 'Ilocos Region (Region I)', 'Cagayan Valley (Region II)', 'Central Luzon (Region III)', 'CALABARZON (Region IV-A)', 'MIMAROPA (Region IV-B)', 'Bicol Region (Region V)', 'Western Visayas (Region VI)', 'Central Visayas (Region VII)', 'Eastern Visayas (Region VIII)', 'Zamboanga Peninsula (Region IX)', 'Northern Mindanao (Region X)', 'Davao Region (Region XI)', 'SOCCSKSARGEN (Region XII)', 'Caraga (Region XIII)']
function updateDecomposedImage() {
    var files = [];
    var slider = document.getElementById('decomposed-slider');
    var image = document.getElementById('decomposed-image');
    var index = slider.value;
    image.src = 'RegionsDecomposed/' + regions_title[index] + 'decomposed' + '.png';
}

function updatePredictionImage() {
    var files = [];
    var slider = document.getElementById('prediction-slider');
    var image = document.getElementById('prediction-image');
    var index = slider.value;
    image.src = 'RegionsPrediction/' + regions_title[index] + 'predict' + '.png';
}

$(document).ready(function () {
    $(".collection-step").click(function () {
        $(this).next(".step-infos").slideToggle();
    });
});