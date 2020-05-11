window.onload = function() {
    var logo = document.getElementById('dsglogo');
    var body = document.body;
    var links = document.getElementById('navbar');

    logo.onmouseover = function() {
        body.style.transition = "all 0.2s";
        body.style.backgroundColor = "black";
        links.style.color = "white";
    }
    logo.onmouseout = function() {
        body.style.backgroundColor = "#d6ddcb";
        links.style.color = "#ff7cc8";
    }
}