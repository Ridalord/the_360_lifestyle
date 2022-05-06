var $overlay = $("<div id='overlay'></div > ");
// $("ul.topnav").append($overlay)
$($overlay).hide();
function dropDown() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
    $($overlay).show();
}
// $($overlay).click(function () {
//     $overlay.hide(); 
// });
