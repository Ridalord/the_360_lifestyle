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


