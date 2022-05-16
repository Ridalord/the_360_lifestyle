// var $overlay = $("<div id='overlay'></div > ");
// $("ul.topnav").append($overlay)
$("#overlay").hide();
function dropDown() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        $("#overlay").show();
    }
    else {
        x.className = "topnav";
        $("#overlay").hide();
        $("#overlay").click(function () {
            $("#overlay").hide();
        });
    }
    
}

// $("body").click(function () {
//     $("#overlay").hide();
// });
