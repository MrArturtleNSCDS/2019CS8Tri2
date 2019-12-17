//Emoji

var palette = $("#colorPalette");
var clickedColor = "#000";
var clickedPupil = "";

$(".mouthImage").click(
    function(){
        var clickedMouth = $(this).css("background-image");
        $('#mouth').css("background-image", clickedMouth);
    }
);

$(".color").click(
    function(){
        var clickedColor = $(this).css("background-color");
        $('#face').css("background-color", clickedColor);
    }
);

$(".pupilImage").click(
    function(){
        clickedPupil = $(this).css("background-image");
        console.log(clickedPupil);
    }
);

$(".pupil").click(
    function(){
        $(this).css("background-image", clickedPupil);
    }
);


