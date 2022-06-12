document.getElementById('overlay').style.display = 'none';
function dropDown() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById('overlay').style.display = 'block';
    }
    else {
        x.className = "topnav";
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('overlay').addEventListener('click', function () {
                    document.getElementById('overlay').style.display = 'none';
        });
    }
    
}

// $("div.note").click(function () {
//     $("#overlay").hide();
//     dropDown();
// });


// var $overlay2 = $("<div id='overlay'></div>");
// $("body").append($overlay2);
// $("#overlay2").hide();
// $("#tc a").click(function (event) {
//     event.preventDefault();
//     $($overlay2).show();
// });
// $overlay2.click(function () {
//     $overlay2.hide();
// })
